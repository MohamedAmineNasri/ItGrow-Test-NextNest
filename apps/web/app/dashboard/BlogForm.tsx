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
      console.log("Sending image:", img); // Ensure the image is logged
    } else {
      console.error("No image selected");
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
    <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto p-4">
      <div className="relative z-0 w-full mb-5 group">
        <input
          type="text"
          id="blog_title"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required
        />
        <label
          htmlFor="blog_title"
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Blog Title
        </label>
      </div>
      <div className="relative z-0 w-full mb-5 group">
        <input
          type="text"
          id="blog_category"
          name="catSlug"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required
        />
        <label
          htmlFor="blog_category"
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Blog Category
        </label>
      </div>
      <div className="relative z-0 w-full mb-5 group">
        <textarea
          id="blog_content"
          name="desc"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required
        ></textarea>
        <label
          htmlFor="blog_content"
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Blog Content
        </label>
      </div>
      <div className="relative z-0 w-full mb-5 group">
        <label
          htmlFor="img"
          className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg
              className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 16"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
              />
            </svg>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <span className="font-semibold">Click to upload</span> or drag and
              drop
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              SVG, PNG, JPG, or GIF (MAX. 800x400px)
            </p>
          </div>
          <input
            type="file"
            id="img"
            name="img"
            onChange={(e) => {console.log(e),setImage(e.target.files[0])}}
            className="hidden"
          />
        </label>
      </div>

      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Submit
      </button>
    </form>
  );
};

export default BlogForm;
