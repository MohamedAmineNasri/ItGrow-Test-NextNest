"use server";

import { redirect } from "next/navigation";
import { BACKEND_URL } from "./constants";
import { FormSate, SignInFormSchema, SignupFormSchema } from "./type";
import { createSession, updateTokens } from "./session";

export async function signUp(
  state: FormSate,
  formData: FormData
): Promise<FormSate> {
  const validationFields = SignupFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validationFields.success) {
    return {
      error: validationFields.error.flatten().fieldErrors,
    };
  }

  const response = await fetch(`${BACKEND_URL}/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password"),
    }),
  });

  if (response.ok) {
    redirect("/auth/signin");
  } else
    return {
      message:
        response.status === 409
          ? "This user is already exist!"
          : response.statusText,
    };
}

export async function signIn(
  state: FormSate,
  formData: FormData
): Promise<FormSate> {
  const validationFields = SignInFormSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validationFields.success)
    return {
      error: validationFields.error.flatten().fieldErrors,
    };

  const response = await fetch(`${BACKEND_URL}/auth/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(validationFields.data),
  });
  if (response.ok) {
    const result = await response.json();
    await createSession({
      user: {
        id: result.id,
        name: result.name,
      },
      accessToken: result.accessToken,
      refreshToken: result.refreshToken,
    });
    redirect("/");
  } else {
    return {
      message:
        response.status === 401 ? "Invalid Credentials!" : response.statusText,
    };
  }
}

export const refreshToken = async (oldRefreshToken: string) => {
  console.log("Attempting to refresh token...");
  try {
    const response = await fetch(`${BACKEND_URL}/auth/refresh`, {
      method: "POST",
      body: JSON.stringify({ refresh: oldRefreshToken }),
      headers: { "Content-Type": "application/json" },
    });
    if (!response.ok) {
      console.error(`Token refresh failed: ${response.statusText}`);
      throw new Error("Failed to refresh token");
    }
    const tokens = await response.json();
    console.log("Tokens refreshed successfully", tokens);
    return tokens.accessToken;
  } catch (error) {
    console.error("Token refresh error:", error);
    return null;
  }
  
};
