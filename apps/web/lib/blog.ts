"use server";

import { redirect } from "next/navigation";
import { BACKEND_URL } from "./constants";

export async function createPost(formData: FormData, session) {
  const title = formData.get("title");
  const catSlug = formData.get("catSlug");
  const desc = formData.get("desc");
  const img = formData.get("img");

  // Validate required fields
  if (!title || !catSlug || !desc) {
    return { message: "Title, Category, and Description are required." };
  }
  if(!img ){
    return { message: " img is  required." };
  }

  // Prepare the data for submission
  const requestData = new FormData();
  requestData.append("title", title);
  requestData.append("catSlug", catSlug);
  requestData.append("desc", desc);
  if (img) requestData.append("img", img); // Attach the image file directly

  try {
    // Make the POST request
    const response = await fetch(`${BACKEND_URL}/auth/create-post`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${session.accessToken}`,
      },
      body: formData,
    });

    if (response.ok) {
       // Get the Next.js router
       redirect('/') // Redirect client-side to the homepage
      return { message: "Post created successfully." }; // Optional
    } else {
      const errorData = await response.json();
      return {
        message: errorData.message || "Failed to create post.",
      };
    }
  } catch (error) {
    console.error("Error creating post:", error);
    return { message: "An error occurred while creating the post." };
  }
}
