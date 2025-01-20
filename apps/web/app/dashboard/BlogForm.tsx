"use client";

import { createPost } from "@/lib/blog";
import { useState, useEffect } from "react";

const BlogForm = ({ session }) => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [img, setImage] = useState();

  useEffect(() => {
    if (session && session.user) {
      setUserEmail(session.user.name);
    }
  }, [session]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("catSlug", category);
    formData.append("desc", content);
    formData.append("userEmail", userEmail);
  
    if (img) {
      formData.append("img", img); // Correctly append the image file
      console.log('Sending image:', img); // Ensure the image is logged
    } else {
      console.error('No image selected');
    }
  
    try {
      const result = await createPost(formData, session);
      if (result.message) {
        console.error(result.message);
      } else {
        console.log("Post created successfully");
      }
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };
  
  
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="blog_title">Blog Title</label>
        <input
          type="text"
          id="blog_title"
          name="title" // Correct the name here
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="blog_category">Blog Category</label>
        <input
          type="text"
          id="blog_category"
          name="catSlug" // Correct the name here
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="blog_content">Blog Content</label>
        <textarea
          id="blog_content"
          name="desc" // Correct the name here
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        ></textarea>
      </div>
      <div>
        <label htmlFor="img">Upload Image</label>
        <input
          type="file"
          id="img"
          name="img" // Update to match the interceptor name
          onChange={(e) => setImage(e.target.files[0])}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default BlogForm;
