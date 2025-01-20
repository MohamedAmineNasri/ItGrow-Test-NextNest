"use server";

import { redirect } from "next/navigation";
import { BACKEND_URL } from "./constants";

export async function createWork(formData: FormData, session) {
    const imgs = formData.get("imgs");
  
    if (!imgs) {
      return { message: "imgs is required." };
    }
  
    try {
      // Make the POST request
      const response = await fetch(`${BACKEND_URL}/auth/upload-work-images`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${session.accessToken}`,
        },
        body: formData,  // Use formData, which already contains the image
      });
  
      if (response.ok) {
        return { message: "Work created successfully." };
      } else {
        const errorData = await response.json();
        return {
          message: errorData.message || "Failed to create Work.",
        };
      }
    } catch (error) {
      console.error("Error creating Work:", error);
      return { message: "An error occurred while creating the Work." };
    }
  }
  