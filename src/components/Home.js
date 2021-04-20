import React from "react";
import backgroundImage from "../mxgasperi-background.jpg";

export default function Home() {
  return (
    <main>
      <img
        src={backgroundImage}
        alt="Doodle"
        className="absolute object-cover w-full h-full opacity-25"
      />
      <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
        <h1 className="text-6xl orange-txt font-bold poppins leading-none lg:leading-snug home-name ">
          Hola! My name is Luis.
        </h1>
      </section>
    </main>
  );
}
