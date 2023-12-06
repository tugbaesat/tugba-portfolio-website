import React from "react";
import Link from "next/link";
import Image from "next/image";

const Contact = () => {
  return (
    <div  className=" h-screen bg-gradient-to-b to-[#dccccc] from-[#f1eaea]  dark:from-[#001b1d] dark:to-[#002f32] overflow-hidden flex justify-center items-center text-center gap-10 w-full">
      <div>
        <h2 className="text-4xl md:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-[#F8A000] dark:from-[#F0BE47] to-[#FFC500] dark:to-[#FFE182] text-center mb-6">
          Let&apos;s Connect
        </h2>
        <p className="text-greyOne mb-4 max-w-md">
          Feel free to contact me. I&apos;m always open to new opportunities and
          collaborations.{" "}
        </p>
        <div className="flex flex-row gap-2 socials items-center justify-center md:justify-start">
          <Link href="https://github.com/tugbaesat">
            {/* <Image src={GithubIcon} alt="Github Icon" /> */}
          </Link>
          <Link href="https://www.linkedin.com/in/tugbaesat/">
            {/* <Image src={LinkedinIcon} alt="Linkedin Icon" /> */}
          </Link>
        </div>
      </div>
      <div>
        <form
          action="https://getform.io/f/9b86678e-12ee-4787-94a3-854228d384ec"
          method="POST"
          className="flex flex-col text-left"
        >
          <div className="mb-6">
            <label
              className="block mb-2 text-sm font-medium text-greyOne"
              htmlFor="subject"
            >
              Your Email
            </label>
            <input
              name="email"
              type="text"
              id="email"
              required
              placeholder="example@email.com"
              className="bg-gray-300 border border-gray-400 placeholder-slate-100 text-greyOne  text-sm rounded-lg block w-full p-2.5 "
            />
          </div>
          <div className="mb-6">
            <label
              className="block mb-2 text-sm font-medium text-greyOne"
              htmlFor="subject"
            >
              Subject
            </label>
            <input
              name="subject"
              type="text"
              id="text"
              required
              placeholder="Just saying hi!"
              className="bg-gray-300 border border-gray-400 placeholder-slate-100 text-greyOne text-sm rounded-lg block w-full p-2.5 "
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-greyOne"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="bg-gray-300 border border-gray-400 placeholder-slate-100 text-greyOne  text-sm rounded-lg block w-full p-2.5"
              placeholder={`Hi, Tugba!
Let's talk about...`}
            />
          </div>
          <button
            type="submit"
            className="w-full sm:w-fit items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden font-medium rounded-full group bg-gradient-to-br from-purpleOne to-pinkOne group-hover:from-purpleOne group-hover:to-pinkOne text-purpleTwo focus:ring-4 focus:outline-none focus:ring-purpleOne"
          >
            <span className="block px-5 py-2 transition-all duration-75 ease-in bg-pinkOne bg-opacity-50 rounded-full group-hover:bg-opacity-0">
              Send Message
            </span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
