"use server";

import { authFetch } from "./authFetch";
import { BACKEND_URL } from "./constants";
import { getSession } from "./session";

export const getProfile = async () => {

 const response = await authFetch(`${BACKEND_URL}/auth/protected`)
  const result = await response.json();
  return result;
};


export const getAllPosts = async () => {
  try {
    const response = await authFetch(`${BACKEND_URL}/auth/get-all-posts`);
    const result = await response.json();
    
    // Ensure that 'posts' is an array before returning it
    return Array.isArray(result.posts) ? result.posts : [];
  } catch (error) {
    console.error('Error fetching posts:', error);
    return []; // Return an empty array in case of error
  }
};
