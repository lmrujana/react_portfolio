import React, { useState, useEffect } from "react";
import sanityClient from "../client";
import backgroundImage from "../mxgasperi-background2.jpg";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function About() {
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "author"]{
      name,
      bio,
      "authorImage": image.asset->url
    }`
      )
      .then((data) => setAuthor(data[0]))
      .catch(console.error);
  }, []);

  if (!author) return <div>Loading...</div>;

  return (
    <main className="relative">
      <img src={backgroundImage} alt="Doodles" className="absolute w-full" />
      <div className="p-10 lg:pt-48 container mx-auto relative">
        <section className="prussian-blue rounded-lg shadow-2xl lg:flex p-20">
          <img
            src={urlFor(author.authorImage).url()}
            className="rounded w-32 h-32 lg:w-64 lg:h-64 mr-8"
            alt={author.name}
          />
          <div className="text-lg flex flex-col justify-center">
            <h1 className="poppins text-6xl text-green-300 mb-4">
              Hey there. I'm{" "}
              <span className="text-green-100">{author.name}</span>
            </h1>
            <div className="prose lg:prose-xl text-white ">
              <BlockContent
                blocks={author.bio}
                projectId="hm1a1q7u"
                dataset="production"
              />
            </div>
            <a
              href="https://docs.google.com/document/d/1Z-4petF4GY9o5FxdLiDq1w62FAZMi2U6iPIduvX_RnY/edit?usp=sharing"
              rel="noopener noreferrer"
              target="_blank"
              className="text-red-500 font-bold hover:underline hover:text-red-400"
            >
              View My Resume:{" "}
              <span role="img" aria-label="right pointer">
                👉
              </span>
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
