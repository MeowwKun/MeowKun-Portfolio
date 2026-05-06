export default function TechStack() {
    return (
        <main>
            <section className="w-full py-30 flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-6xl font-black tracking-[0.45rem] mb-2">
                        MODERN
                    </h2>
                    <h2 className="text-6xl font-black tracking-[0.45rem] text-[#2A4C4E]">
                        TECH STACK
                    </h2>
                </div>
            </section>

            <section className="w-800 max-w-screen-2xl h-200 px-10 pb-30 mx-auto">
                    {/* First Row - 3 larger boxes */}
                <div className="grid grid-cols-3 mb-0">
                    <div className="bg-[#2A4C4E] border border-black p-12 h-[250px] flex items-center justify-center">
                        <h3 className="text-3xl font-bold tracking-wide text-black">Python</h3>
                    </div>
                    <div className="bg-white border border-black p-12 h-[250px] flex items-center justify-center">
                        <h3 className="text-3xl font-bold tracking-wide text-black">Next.js</h3>
                    </div>
                    <div className="bg-white border border-black p-12 h-[250px] flex items-center justify-center">
                        <h3 className="text-3xl font-bold tracking-wide text-black">Tailwind</h3>
                    </div>
                </div>

                {/* Second Row - 4 smaller boxes */}
                <div className="grid grid-cols-4 h-200">
                    <div className="bg-white border border-black p-8 h-[250px] flex items-center justify-center">
                        <h3 className="text-2xl font-bold tracking-wide text-black">Supabase</h3>
                    </div>
                    <div className="bg-white border border-black p-8 h-[250px] flex items-center justify-center">
                        <h3 className="text-2xl font-bold tracking-wide text-black">GSAP</h3>
                    </div>
                    <div className="bg-white border border-black p-8 h-[250px] flex items-center justify-center">
                        <h3 className="text-2xl font-bold tracking-wide text-black">Vercel</h3>
                    </div>
                    <div className="bg-white border border-black p-8 h-[250px] flex items-center justify-center">
                        <h3 className="text-2xl font-bold tracking-wide text-black">Figma</h3>
                    </div>
                </div>
            </section>
        </main>
    );
}
