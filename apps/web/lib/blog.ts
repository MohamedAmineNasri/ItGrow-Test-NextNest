"use server";

import { BACKEND_URL } from "./constants";

export async function createPost(formData: FormData, session) {
  const title = formData.get("title");
  const catSlug = formData.get("catSlug");
  const desc = formData.get("desc");
  const img = formData.get("img");

  if (!title || !catSlug || !desc) {
    return { message: "Title, Category, and Description are required." };
  }
  if (!img) {
    return { message: " img is  required." };
  }

  const requestData = new FormData();
  requestData.append("title", title);
  requestData.append("catSlug", catSlug);
  requestData.append("desc", desc);
  if (img) requestData.append("img", img); 
  try {
    const response = await fetch(`${BACKEND_URL}/auth/create-post`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${session.accessToken}`,
      },
      body: formData,
    });

    if (response.ok) {

      return { message: "Post created successfully." }; 
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
