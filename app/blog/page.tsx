import Link from 'next/link';
import { allBlogs } from 'contentlayer/generated';
import ViewCounter from './view-counter';
import Image from 'next/image';
export const metadata = {
  title: 'Blog',
  description: 'Read my thoughts on software development, design, and more.',
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
            <div className="w-full flex flex-col">
            {/* <Image
            alt="something"
            height={36}
            width={36}
            src="https://res.cloudinary.com/practicaldev/image/fetch/s--TdYUTdQ8--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/0cwag0eg8bwjoj01rcca.jpg"
            className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
            quality={100}
          /> */}
              <p className='font-extralight text-m font-serif mb-1'>{post.title}</p>
              {/* <ViewCounter slug={post.slug} trackView={false} /> */}
            </div>
          </Link>
        ))}
    </section>
  );
}
