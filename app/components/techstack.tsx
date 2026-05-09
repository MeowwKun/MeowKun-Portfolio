import Image from "next/image";

export default function TechStack() {
    return (
        <main>
            <section className="w-full py-30 flex items-center justify-center" data-reveal>
                <div className="text-center">
                    <h2 className="text-6xl font-black tracking-[0.45rem] mb-2">
                        MODERN
                    </h2>
                    <h2 className="text-6xl font-black tracking-[0.45rem] text-[#2A4C4E]">
                        TECH STACK
                    </h2>
                </div>
            </section>

            <section className="w-full px-30 pb-30">
                {/* First Row - 3 larger boxes */}
                <div className="grid grid-cols-3 mb-0" data-stagger>
                    <div className="bg-[#2A4C4E] border border-black p-10 h-[320px] flex items-center justify-center" data-stagger-item>
                        <Image
                            src="/tech_stack/python.png"
                            alt="Python"
                            width={95}
                            height={95}
                            className="h-22 w-auto"
                        />
                    </div>
                    <div className="bg-white border border-black p-20 h-[320px] flex items-center justify-center" data-stagger-item>
                        <Image
                            src="/tech_stack/next.png"
                            alt="Next.js"
                            width={95}
                            height={95}
                            className="h-15 w-auto"
                        />
                    </div>
                    <div className="bg-white border border-black p-10 h-[320px] flex items-center justify-center" data-stagger-item>
                        <Image
                            src="/tech_stack/tailwind.png"
                            alt="Tailwind"
                            width={95}
                            height={95}
                            className="h-22 w-auto"
                        />
                    </div>
                </div>

                {/* Second Row - 4 smaller boxes */}
                <div className="grid grid-cols-4" data-stagger>
                    <div className="bg-white border border-black p-6 h-[300px] flex items-center justify-center" data-stagger-item>
                        <Image
                            src="/tech_stack/supabase.png"
                            alt="Supabase"
                            width={80}
                            height={80}
                            className="h-18 w-auto"
                        />
                    </div>
                    <div className="bg-white border border-black p-6 h-[300px] flex items-center justify-center" data-stagger-item>
                        <Image
                            src="/tech_stack/gsap.png"
                            alt="GSAP"
                            width={80}
                            height={80}
                            className="h-18 w-auto"
                        />
                    </div>
                    <div className="bg-white border border-black p-20 h-[300px] flex items-center justify-center" data-stagger-item>
                        <Image
                            src="/tech_stack/vercel.png"
                            alt="Vercel"
                            width={70}
                            height={70}
                            className="h-8 w-auto"
                        />
                    </div>
                    <div className="bg-white border border-black p-6 h-[300px] flex items-center justify-center" data-stagger-item>
                        <Image
                            src="/tech_stack/figma.png"
                            alt="Figma"
                            width={80}
                            height={80}
                            className="h-18 w-auto"
                        />
                    </div>
                </div>
            </section>
        </main>
    );
}
