import React from "react";

const Footer = () => {
  return (
    <section className="flex flex-col justify-center items-center px-6 sm:px-12 md:px-16 py-8 sm:py-12 bg-[#11204D] mt-6">
      <div className="flex flex-col items-center gap-6 sm:gap-10 w-full max-w-[1140px]">
        {/* Header Section */}
        <div className="relative flex flex-col md:ml-[250px] gap-2 w-full">
          <div className="absolute w-10 h-10 sm:w-15 sm:h-15 top-[-10px] sm:top-[-14px] bg-[#33E7AF1A] rounded-full"></div>
          <h2 className="text-white font-serif font-extrabold text-xl sm:text-2xl">
            Say Hello
          </h2>
          <p className="text-[#B5B5BA] font-serif font-extrabold text-xs sm:text-sm">
            Let’s Connect and Create Something Amazing
          </p>
        </div>

        {/* Form and Contact Info */}
        <div className="flex flex-col lg:flex-row justify-center gap-6 sm:gap-10 w-full">
          {/* Form Section */}
          <form className="flex flex-col gap-4 w-full lg:max-w-md">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                className="flex-1 p-3 sm:p-4 bg-white border border-[#11204D26] rounded-xl outline-none"
                placeholder="Name"
              />
              <input
                type="email"
                className="flex-1 p-3 sm:p-4 bg-white border border-[#11204D26] rounded-xl outline-none"
                placeholder="Email"
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block text-[#11204D40] text-xs sm:text-sm"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="w-full p-3 sm:p-4 bg-white border border-[#11204D26] rounded-xl outline-none"
                placeholder="Subject"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-[#11204D40] text-xs sm:text-sm"
              >
                Message
              </label>
              <textarea
                id="message"
                className="w-full p-3 sm:p-4 bg-white border border-[#11204D26] rounded-xl outline-none"
                placeholder="Your message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="self-center w-32 sm:w-40 h-12 sm:h-14 bg-[#6138BD] text-white rounded-xl"
            >
              Send Now
            </button>
          </form>

          {/* Contact Info */}
          <div className="flex flex-col gap-4 sm:gap-6">
            {[
              {
                label: "My Location",
                value: "PO Box 16122, Collins, Victoria 3000, Australia",
                icon: (
                  <svg
                    className="w-6 h-6 text-[#6138BD]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 2C8.686 2 6 4.686 6 8C6 12 12 22 12 22C12 22 18 12 18 8C18 4.686 15.314 2 12 2Z" />
                    <path d="M12 10C13.104 10 14 9.104 14 8C14 6.896 13.104 6 12 6C10.896 6 10 6.896 10 8C10 9.104 10.896 10 12 10Z" />
                  </svg>
                ),
              },
              {
                label: "Give a Call",
                value: "90 1234 56 78",
                icon: (
                  <svg
                    className="w-6 h-6 text-[#6138BD]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.6V18C22 18.35 21.85 18.67 21.61 18.89C19.9 20.53 17.03 20.59 15.39 18.94C14.76 18.35 14.73 17.3 15.17 16.65L17.55 13.91C17.88 13.54 17.65 13 17.14 13H13.5C12.76 13 12.11 12.66 11.89 11.94L11.19 8.8C11.07 8.41 11.37 8 11.79 8.04C12.93 8.14 14.07 8.55 15.11 9.14C16.01 9.66 16.76 10.34 17.39 11.12C17.96 11.8 18.13 12.77 17.7 13.62L14.83 17.57C14.46 18.1 13.78 18.26 13.16 17.92C12.27 17.56 11.38 17.16 10.5 16.77C9.62 16.38 8.85 15.94 8.2 15.42C7.95 15.13 8.11 14.67 8.38 14.45C9.61 13.37 10.76 12.29 11.8 11.22C12.7 10.34 13.57 9.51 14.5 8.68L14.5 8.68C14.97 8.18 16.29 7.75 17.15 8.17C18.63 8.91 19.79 9.96 20.29 11.36C20.6 12.15 20.45 13.08 20 13.58L18.07 15.56" />
                  </svg>
                ),
              },
              {
                label: "Email Me",
                value: "sayhello@example.com",
                icon: (
                  <svg
                    className="w-6 h-6 text-[#6138BD]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M2 3H22C22.55 3 23 3.45 23 4V20C23 20.55 22.55 21 22 21H2C1.45 21 1 20.55 1 20V4C1 3.45 1.45 3 2 3Z" />
                    <path d="M23 4L12 13L1 4" />
                  </svg>
                ),
              },
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-6 h-6 text-[#6138BD]">
                  {item.icon}
                </div>
                <div>
                  <p className="text-white font-medium text-base sm:text-lg">
                    {item.label}
                  </p>
                  <p className="text-white text-opacity-70 text-base sm:text-lg">
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
