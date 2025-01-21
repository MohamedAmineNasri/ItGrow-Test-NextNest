import React from "react";
import Image from "next/image";
import { getAllPosts } from "@/lib/actions";

const BlogSection = async () => {
  const posts = await getAllPosts();

  if (!posts || posts.length === 0) {
    return (
      <div className="flex flex-col justify-center items-center px-6  w-full">
        <div className="flex flex-col items-center gap-32 max-w-[1140px] w-full">
          <div className="flex flex-col items-center w-full">
            <h2 className="font-playfair font-bold text-[24px] sm:text-[28px] md:text-[36px] leading-[1.2] text-[#11204D] text-center">
              From The Blog
            </h2>
            <p className="font-playfair font-bold text-[12px] sm:text-[14px] leading-[1.5] text-[#11204D]/[0.35] text-center">
              Stories, Tips, and Inspiration
            </p>
          </div>

          <p>No posts available at the moment.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center items-center px-6  w-full">
      <div className="flex flex-col items-center gap-10 max-w-[1140px] w-full">
        <div className="flex flex-col items-center w-full py-10">
          <h2 className="font-playfair font-bold text-[24px] sm:text-[28px] md:text-[36px] leading-[1.2] text-[#11204D] text-center">
            From The Blog
          </h2>
          <p className="font-playfair font-bold text-[12px] sm:text-[14px] leading-[1.5] text-[#11204D]/[0.35] text-center">
            Stories, Tips, and Inspiration
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full">
          {posts.map((post) => (
            <div
              key={post.id}
              className="flex flex-col items-start w-full max-w-[380px] mx-auto"
            >
              <div className="relative w-full max-w-[350px] h-[450px] sm:h-[521.19px] border border-[#11204D]/[0.15] rounded-[10px] flex flex-col">
                <div className="flex-shrink-0">
                  <Image
                    src={`/${post.img}`}
                    alt={post.title}
                    width={328.4}
                    height={328.4}
                    className="w-[328.4px] h-[328.4px] rounded-[10px] object-cover"
                  />
                </div>

                <div className="absolute top-[10px] left-[10%] bg-[#6138BD] text-white rounded-[10px] px-[10px] py-[5px] text-[12px] sm:text-[13px] uppercase font-jost">
                  {post.catSlug}
                </div>

                <div className="flex flex-col justify-between p-4 mt-auto gap-2">
                  <div className="flex flex-row gap-1">
                    <p className="text-[12px] sm:text-[14px] text-[#11204D]/[0.35]">
                      {new Date(post.createdAt).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}{" "}
                      - by {post.userEmail}
                    </p>
                  </div>

                  <h5 className="text-[16px] sm:text-[20px] md:text-[24px] leading-[1.2] text-[#11204D] font-medium mt-4">
                    {post.title}
                  </h5>

                  <div className="flex flex-col">
                    <div className="relative">
                      <div className="absolute bottom-[-2px] w-[30px] h-[2px] bg-[#6138BD]"></div>
                      <p className="text-[#6138BD] text-[14px] sm:text-[17px] leading-[1.5] font-medium mt-4">
                        Continue Reading
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
