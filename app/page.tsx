import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main>
      <Hero />
      <section className="max-w-6xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold mb-6">Latest Insights</h2>
        <p className="text-gray-400">
          Solasi delivers impactful stories, deep analysis, and forward-thinking media content.
        </p>
      </section>
    </main>
  );
}
