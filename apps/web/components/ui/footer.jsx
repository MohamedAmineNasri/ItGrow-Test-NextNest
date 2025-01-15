import React from "react";

const Footer = () => {
  return (
    <section className="flex flex-col justify-center items-center px-16 py-12 bg-[#11204D]">
      <div className="flex flex-col items-center gap-10 w-full max-w-[1140px]">
        {/* Header Section */}
        <div className="relative flex flex-col items-start gap-2 w-full">
          <div className="absolute w-15 h-15 top-[-14px] bg-[#33E7AF1A] rounded-full"></div>
          <h2 className="text-white font-serif font-extrabold text-2xl">
            Say Hello
          </h2>
          <p className="text-[#B5B5BA] font-serif font-extrabold text-sm">
            Let’s Connect and Create Something Amazing
          </p>
        </div>

        {/* Form and Contact Info */}
        <div className="flex flex-wrap justify-between gap-10 w-full">
          {/* Form Section */}
          <form className="flex flex-col gap-4 w-full max-w-md">
            <div className="flex gap-3">
              <input
                type="text"
                className="flex-1 p-4 bg-white border border-[#11204D26] rounded-xl outline-none"
                placeholder="Name"
              />
              <input
                type="email"
                className="flex-1 p-4 bg-white border border-[#11204D26]  rounded-xl outline-none"
                placeholder="Email"
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block text-[#11204D40] text-sm"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="w-full p-4 bg-white border border-[#11204D26]  rounded-xl outline-none"
                placeholder="Subject"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-[#11204D40] text-sm"
              >
                Message
              </label>
              <textarea
                id="message"
                className="w-full p-4 bg-white border border-[#11204D26]  rounded-xl outline-none"
                placeholder="Your message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="self-center w-40 h-14 bg-[#6138BD] text-white  rounded-xl outline-none"
            >
              Send Now
            </button>
          </form>

          {/* Contact Info */}
          <div className="flex flex-col gap-6">
            {[
              {
                label: "My Location",
                value: "PO Box 16122, Collins, Victoria 3000, Australia",
              },
              { label: "Give a Call", value: "90 1234 56 78" },
              { label: "Email Me", value: "sayhello@example.com" },
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-6 h-6 bg-[#6138BD] rounded-full"></div>
                <div>
                  <p className="text-white font-medium text-lg">{item.label}</p>
                  <p className="text-white text-opacity-70 text-lg">
                    {item.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
