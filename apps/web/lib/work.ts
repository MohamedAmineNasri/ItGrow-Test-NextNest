"use server";

import { authFetch } from "./authFetch";
import { BACKEND_URL } from "./constants";

export async function createWork(formData: FormData, session) {
    const imgs = formData.get("imgs");
  
    if (!imgs) {
      return { message: "imgs is required." };
    }
  
    try {
      const response = await fetch(`${BACKEND_URL}/auth/upload-work-images`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${session.accessToken}`,
        },
        body: formData,  
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
  

  export const getWorkImages = async () => {
    try {
      const response = await authFetch(`${BACKEND_URL}/auth/get-work-images`);
      const result = await response.json();
  
      // Ensure that 'workImages' is an array before returning it
      return Array.isArray(result.workImages) ? result.workImages : [];
    } catch (error) {
      console.error('Error fetching work images:', error);
      return []; // Return an empty array in case of error
    }
  };
  
  