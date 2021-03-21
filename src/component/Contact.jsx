import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function Contact() {
  return (
    <div
      className="flex flex-col items-center justify-center font-dosis pb-5"
      style={{ background: "rgb(9, 28, 41)" }}
      id="contact"
    >
      <div className="text-white p-4">
        <h1 className="text-4xl font-bold mb-3">About me :</h1>
        <p className="text-2xl">
          My name is Ayman, I am 17 years old. I am a high school student,
          passionate about computers siences since always. I have been doing web
          programming for 1 years now.
        </p>
      </div>
      <div className="flex">
        <a
          href="https://github.com/AymaBA"
          target="blank"
          className="w-12 mx-3 select-none"
        >
          <LazyLoadImage src={process.env.PUBLIC_URL + "/assets/github.png"} />
        </a>
        <a
          href="mailto:aymanbadev@gmail.com?subject=Portfolio Message"
          target="blank"
          className="w-12 select-none"
        >
          <LazyLoadImage src={process.env.PUBLIC_URL + "/assets/gmail.png"} />
        </a>
        <a
          href="https://www.linkedin.com/in/aymaba/"
          target="blank"
          className="w-12 select-none"
        >
          <LazyLoadImage src={process.env.PUBLIC_URL + "/assets/link.png"} />
        </a>
      </div>
    </div>
  );
}
