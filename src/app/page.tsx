export default function Home() {
  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-4xl font-bold">Samet Çolak</h1>
        <p className="mt-2 text-lg">
          Java Backend Developer focused on building secure and scalable systems.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Projects</h2>
        <ul className="list-disc ml-6 mt-2">
          <li>Backend Security Systems</li>
          <li>Simulation Tools</li>
          <li>Automation Workflows</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Contact</h2>
        <p className="mt-2">
          Reach me at <a href="mailto:youremail@gmail.com" className="text-blue-500">youremail@gmail.com</a>
        </p>
      </section>
    </div>
  );
}