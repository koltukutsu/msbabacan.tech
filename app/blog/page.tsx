import Link from "next/link";
import { allBlogs } from "contentlayer/generated";
import ViewCounter from "./view-counter";
import Image from "next/image";
export const metadata = {
  title: "Blog",
  description: "Read my thoughts on software development, design, and more.",
};

export default async function BlogPage() {
  return (
    <section>
      <h1 className="font-bold text-3xl font-serif mb-5">Blog</h1>
      {allBlogs
        .sort((a, b) => {
          if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col space-y-1 mb-4"
            href={`/blog/${post.slug}`}
          >
            {/* <div className="flex flex-col items-center rounded-lg shadow md:flex-row md:max-w-xl ">
              <Image
                className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                src="https://res.cloudinary.com/practicaldev/image/fetch/s--TdYUTdQ8--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/0cwag0eg8bwjoj01rcca.jpg"
                alt=""
                width="48"
                height="96"
              />
              <p className="font-extralight text-m font-serif mb-1 p-4 leading-normal">
                {post.title}
              </p> */}
            <div className="rounded-xl max-w-md mx-autooverflow-hidden md:max-w-2xl">
              <div className="md:flex">
                <div className="md:shrink-0">
                  <Image
                    width="512"
                    height="512"
                    blurDataURL={post.coverImageBlur}
                    placeholder="blur"
                    className="rounded-xl h-48 w-full object-cover md:h-[3/10] md:w-48"
                    src={post.coverImage}
                    alt={post.coverImageAlt}
                  />
                </div>
                <div className="p-0 flex flex-col items-start justify-center">
                  <h3 className="text-gray-500 uppercase tracking-wide text-2xl font-serif mb-1 pl-4  leading-normal">
                    {post.category}
                  </h3>
                  <h2
                    className="block mt-1 text-lg leading-tight font-extralight font-serif pl-4 py-4"
                  >
                    {post.title}
                  </h2>
                  <p className="text-gray-300 font-extralight text-s font-serif mb-1 leading-normal pl-4">
                    {post.summary}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        ))}
    </section>
  );
}
