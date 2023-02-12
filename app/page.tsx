import Image from "next/image";
// import { getBlogViews, getTweetCount, getStarCount } from 'lib/metrics';
// import { getTweetCount, getStarCount } from 'lib/metrics';
import { BookIcon, GitHubIcon, InstagramIcon, LinkedInIcon, ViewsIcon } from "components/icons";
import { name, about, bio, avatar } from "lib/info";

export const revalidate = 60;

export const metadata = {
  description: "Developer, writer, and creator.",
  openGraph: {
    title: "Mehmet Semih BABACAN",
    description: "Developer, writer, and creator.",
    url: "https://msbabacan.tech",
    siteName: "Mehmet Semih BABACAN",
    images: [
      {
        url: "https://msbabacan.tech/og.jpg",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "tr-TR",
    type: "website",
  },
};

export default async function HomePage() {
  // const [starCount, views, tweetCount] = await Promise.all([
  //   const [views] = await Promise.all([
  //   getBlogViews(),
  // ]);

  return (
    <section className="">
      <h1 className="font-bold text-3xl font-serif">{name}</h1>
      <p className="my-5 max-w-[460px] text-neutral-200">{about()}</p>
      <div className="flex items-start md:items-center my-8 flex-col md:flex-row">
        <Image
          alt={name}
          className="rounded-full grayscale"
          src={avatar}
          placeholder="blur"
          width={180}
          priority
        />
        <div className="mt-8 md:mt-0 ml-0 md:ml-6 space-y-2 text-neutral-400">
          <a
            className="flex items-center gap-2 hover:text-neutral-200 transition-all"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/koltukutsu/"
          >
            <GitHubIcon />
            <p className="h-7 pl-2"> github</p>
          </a>
          <a
            className="flex items-center gap-2 hover:text-neutral-200 transition-all"
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/mehmetsemihbabacan/"
          >
            <LinkedInIcon />
            <p className="h-7 pl-2"> linkedin</p>
          </a>
          <a
            className="flex items-center gap-2 hover:text-neutral-200 transition-all"
            rel="noopener noreferrer"
            target="_blank"
            // href="https://github.com/koltukutsu/"
          >
            <InstagramIcon />
            <p className="h-7 pl-2"> instagram</p>
          </a>
          {/* <a
            className="flex items-center gap-2 hover:text-neutral-200 transition-all"
            rel="noopener noreferrer"
            target="_blank"
            // href="https://github.com/koltukutsu/"
          >
            <InstagramIcon />
            <p className="h-7 pl-2"> more</p>
          </a> */}
          {/* <p className="flex items-center gap-2">
            <BookIcon />
            Helps all the time
          </p>
          <p className="flex items-center gap-2">
            <BookIcon />
            Intenta mejorar el mismo<br></br> todo el tiempo
          </p> */}
        </div>
      </div>
      <p className="my-5 max-w-[600px]  text-neutral-200">{bio()}</p>
      <ul className="flex flex-col md:flex-row mt-8 space-x-0 md:space-x-4 space-y-2 md:space-y-0 font-sm  text-neutral-400">
        {/* <li>
          <a
            className="flex items-center hover:text-neutral-200 transition-all"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/koltukutsu/"
          >
            <GitHubIcon />
            <p className="h-7 pl-2"> follow me on github</p>
          </a>
        </li> */}
        {/* <li>
          <a
            className="flex items-center hover:text-neutral-700 hover:text-neutral-200 transition-all"
            rel="noopener noreferrer"
            target="_blank"
            href="https://leerob.substack.com"
          >
            <ArrowIcon />
            <p className="h-7">get email updates</p>
          </a>
        </li> */}
      </ul>
    </section>
  );
}
