"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Form = () => {
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const formRef = useRef();


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7lrpnxf",
        "template_zi0r05x",
        formRef.current,
        "oNZ12roSJdbg-nQCq"
      )
      .then(
        (result) => {
          setSuccess(true);
        },
        (error) => {
          setError(true);
        }
      );
  };
  return (
    <form className="flex flex-col text-left" ref={formRef} onSubmit={sendEmail}>
      <div className="pb-6">
        <label className="block pb-2 text-xs font-medium  " htmlFor="name">
          Name
        </label>
        <input
          name="name"
          type="text"
          id="text"
          required
          placeholder="Jane Doe"
          className=" border border-gray-400  text-xs rounded-lg block w-full p-2.5 bg-transparent"
        />
      </div>
      <div className="pb-6">
        <label className="block pb-2 text-xs font-medium " htmlFor="subject">
          Email
        </label>
        <input
          name="email"
          type="text"
          id="email"
          required
          placeholder="example@email.com"
          className=" border border-gray-400   text-xs rounded-lg block w-full p-2.5 bg-transparent"
        />
      </div>
      <div className="pb-6">
        <label className="block pb-2 text-xs font-medium  " htmlFor="subject">
          Subject
        </label>
        <input
          name="subject"
          type="text"
          id="text"
          required
          placeholder="Just saying hi!"
          className=" border border-gray-400  text-xs rounded-lg block w-full p-2.5 bg-transparent"
        />
      </div>
      <div className="pb-6">
        <label htmlFor="message" className="block pb-2 text-xs font-medium ">
          Message
        </label>
        <textarea
          name="message"
          id="message"
          rows={4}
          className=" border border-gray-400   text-xs rounded-lg block w-full p-2.5 bg-transparent"
          placeholder={`Hi, Tugba!
Let's talk about...`}
        />
      </div>
      <button
        type="submit"
        value="Send"
        className="w-full items-center justify-center p-0.5 pb-2 mr-2 overflow-hidden font-medium rounded-full group bg-gradient-to-br from-[#F8A000] dark:from-[#F0BE47] to-[#FFC500] dark:to-[#FFE182] text-[#f1eaea]  dark:text-[#001b1d]"
      >
        <span className="block p-2 transition-all duration-75 ease-in bg-[#FFE182] bg-opacity-0 rounded-full group-hover:bg-opacity-40">
          Send Message
        </span>
      </button>
      {error && (
        <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#f85b00] dark:from-[#f06e47] to-[#ff9d00] dark:to-[#ffc782] text-center text-xs sm:text-lg lg:text-xl py-6">
          Oops! Something went wrong while processing your request. Please check
          your information and try again. If the issue persists, feel free to
          contact me directly at{" "}
          <a href="mailto:tugbaesatsahin@gmail.com">tugbaesatsahin@gmail.com</a>{" "}
          .
        </p>
      )}
      {success && (
        <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#F8A000] dark:from-[#F0BE47] to-[#FFC500] dark:to-[#FFE182] text-xs text-center sm:text-lg lg:text-xl py-6">
          Thank you so much for reaching out! <br />I will get back to you
          shortly.
        </p>
      )}
    </form>

  );
};

export default Form;
