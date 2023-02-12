export const metadata = {
  title: "Uses cases",
  description: "These are the things that I currently use and enjoy producing.",
};

export default function ThingsPage() {
  return (
    <section>
      <h1 className="font-bold text-3xl font-serif mb-8">Things</h1>
      <p className="text-neutral-300 mt-2 mb-8">
        Well, here are some things that I would like to share. The images I
        generated with Midjourney, some useful links I use every now and then,
        books and movies that I strongly (though not sure about the strong part
        xD) recommend 😉
      </p>
      <div className="prose prose-invert">
        <h2 className="font-bold text-3xl font-serif mb-8">Jump</h2>
        <ul>
          <li>
            <a
              href="#useful-links"
              className=" hover:text-gray-400 no-underline"
            >
              Useful Links
            </a>
          </li>
          <li>
            <a
              href="#generated-images"
              className=" hover:text-gray-400 no-underline"
            >
              AI Generated Images By Using Midjourney
            </a>
          </li>
          <li>
            <a href="#books" className=" hover:text-gray-400 no-underline">
              Books I recommend
            </a>
          </li>
          <li>
            <a href="#movies" className=" hover:text-gray-400 no-underline">
              Movies I recommend
            </a>
          </li>
        </ul>
      </div>
      <div className="prose prose-invert">
        <h2 className="font-bold text-3xl font-serif mb-8" id="useful-links">
          Useful Links
        </h2>
        <h2
          className="font-bold text-3xl font-serif mb-8"
          id="generated-images"
        >
          AI Generated Images By Using{" "}
          <a
            href="https://midjourney.com/"
            rel="noopener noreferrer"
            target="_blank"
            className=" hover:text-gray-400"
          >
            Midjourney
          </a>
        </h2>
        <h2 className="font-bold text-3xl font-serif mb-8" id="books">
          Books I Recommend
        </h2>
        <h2 className="font-bold text-3xl font-serif mb-8" id="movies">
          Movies I Recommend
        </h2>
      </div>
    </section>
  );
}
