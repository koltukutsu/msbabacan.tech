export const metadata = {
  title: 'My Resumé',
  description:
    "Here is my Resumé.",
};
export default function UsesPage() {
  return (
    <section>
      <h1 className="font-bold text-3xl font-serif mb-8">Uses</h1>
      <p className="text-neutral-700 dark:text-neutral-300 mt-2 mb-8">
        Here is my <a href="/pdf/resume.pdf" className="italic underline" target="_blank">Résumé</a>.
      </p>
      
    </section>
  );
}
