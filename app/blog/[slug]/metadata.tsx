import { allBlogs } from 'contentlayer/generated';

// Currently, params isn't correctly passted to `generateMetadata`.
// Once that's fixed, I can remove `head.tsx`.
export async function generateMetadata({ params }) {
  const post = allBlogs.find((post) => post.slug === params.slug);
  const {
    title: postTitle,
    publishedAt: publishedTime,
    summary: description,
    image,
    slug,
  } = post;
  const title = `${postTitle} - Mehmet Smeih BABACAN`;
  const ogImage = image ? image : `https://msbabacan.tech/api/og?title=${title}`; // TODO: change this image

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: `https://msbabacan.tech/blog/${slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      title,
    },
  };
}
