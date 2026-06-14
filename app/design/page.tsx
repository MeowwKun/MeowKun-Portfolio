import NavBar from "../components/NavBar";

const works = [
  {
    title: "Namzoed Web",
    version: "Version 1",
    description:
      "An early UI exploration for the Namzoed website, built around a clean grid and bold type hierarchy to guide users through the navigation flow.",
    style: "Minimal · Bold Type · Grid-based",
    video: "/Namzoed-Web-1.mp4",
  },
  {
    title: "Par Art Gallery",
    version: "Concept",
    description:
      "Interface design for an online art gallery, built around an image-first grid that lets the artwork lead, with smooth transitions between browsing and detail views.",
    style: "Gallery Grid · Image-first · Motion",
    video: "/ParArtGallery.mp4",
  },
];

export default function DesignPage() {
  return (
    <main className="min-h-screen bg-[#0B0E16] text-white px-6 md:px-16 lg:px-24 pb-24">
      <NavBar />

      <section className="mb-16">
        <span className="text-[10px] uppercase tracking-[0.3em] text-[#2A4C4E]/60">
          02
        </span>
        <h1 className="text-5xl md:text-7xl font-medium mt-2">Design</h1>
        <p className="text-white/50 mt-4 max-w-xl font-light">
          A selection of interface design work, shown in motion.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {works.map((work) => (
          <div key={work.title} className="flex flex-col">
            <div className="aspect-video w-full overflow-hidden rounded-md border border-[#2A4C4E]/30">
              <video
                src={work.video}
                controls
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            </div>

            <div className="mt-5 border-b border-[#2A4C4E]/20 pb-5">
              <div className="flex items-baseline justify-between">
                <h2 className="text-2xl md:text-3xl font-medium text-white/90">
                  {work.title}
                </h2>
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#2A4C4E]/50">
                  {work.version}
                </span>
              </div>

              <p className="text-[10px] uppercase tracking-[0.28em] text-[#2A4C4E] mt-2">
                {work.style}
              </p>

              <p className="text-white/50 font-light mt-3 leading-relaxed">
                {work.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}