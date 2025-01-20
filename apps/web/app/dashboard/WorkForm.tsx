"use client";

import { createWork } from "@/lib/work";
import React, { useEffect, useState } from "react";

const WorkForm = ({ session }) => {
  const [imgs, setImages] = useState<File | null>(null);
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    if (session && session.user) {
      setUserEmail(session.user.name);
    }
  }, [session]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    if (imgs) {
      formData.append("imgs", imgs); // Append image file correctly
      console.log("Sending image:", imgs.name); // Log the image name (file name)
    } else {
      console.error("No image selected");
      return; // Exit early if no image is selected
    }

    try {
      const result = await createWork(formData, session);
      if (result.message) {
        console.error(result.message);
      } else {
        console.log("Post created successfully");
      }
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  console.log("Selected image:", imgs);

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto p-4">
      <div className="relative z-0 w-full mb-5 group">
        <label
          htmlFor="imgs"
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
            id="imgs"
            name="imgs"
            onChange={(e) => {
              const selectedFile = e.target.files[0];
              setImages(selectedFile);
              console.log("Image selected:", selectedFile); // Log the selected file
            }}
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

export default WorkForm;
