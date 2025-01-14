"use server";

import { redirect } from "next/navigation";
import { BACKEND_URL } from "./constants";
import { FormSate, SignupFormSchema } from "./type";

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

 const response = await fetch(
  `${BACKEND_URL}/auth/register`,
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password"),
    }),
  }
);


  if (response.ok) {
    redirect("/auth/signin");
  } else
    return {
      message: (response.status === 409
        ? "This user is already exist!"
        : response.statusText),
    };
}
