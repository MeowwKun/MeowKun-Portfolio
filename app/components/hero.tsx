import Image from "next/image";
import logo from "../../public/logo.png";
import myself from "../../public/myself.jpg";

export default function hero() {
    return(

    <main>

        {/* Hero Section */}
        <section>

            <div className="w-full flex flex-col gap-8 p-30" data-stagger>
                <div className="w-full flex justify-between items-center">
                    <div className="items-center">
                        <h1 className="text-3xl tracking-[0.45rem]">
                            a{" "}
                            <span className="text-[#2A4C4E] inline-block" data-wave>
                                {"seriously".split("").map((letter, index) => (
                                    <span
                                        key={`${letter}-${index}`}
                                        data-wave-letter
                                        className="inline-block"
                                    >
                                        {letter}
                                    </span>
                                ))}
                            </span>
                            {" "}good
                        </h1>
                        <h1 className="text-3xl tracking-[0.45rem] font-black mt-2">CreativeEngineer</h1>
                    </div>

                    <div className="flex justify-end">
                        <Image src={logo} alt="Logo" width={300} height={300} />
                    </div>
                </div>

                <div className="w-full flex justify-center items-center gap-35 pt-20">

                    <h1 className="text-foreground text-sm tracking-[0.45rem] font-black">AI</h1>
                    <span className="text-foreground text-sm">•</span>
                    
                    <h1 className="text-foreground text-sm tracking-[0.45rem] font-black">Artist</h1>
                    <span className="text-foreground text-sm">•</span>

                    <h1 className="text-foreground text-sm tracking-[0.45rem] font-black">Cinematographer</h1>
                    <span className="text-foreground text-sm">•</span>

                    <h1 className="text-foreground text-sm tracking-[0.45rem] font-black">Designer</h1>

                </div>
            </div>

        </section>

        {/* Sky image */}

        <section>

            <div className="w-full relative" data-reveal>

                <Image
                    src="/banner.jpg"
                    alt="Sky Image"
                    width={1000}
                    height={600}
                    className="w-full h-auto p-2"
                    data-parallax="18"
                />

                {/* Left text */}
                <div className="absolute left-30 top-30 -translate-y-1/2" data-reveal>
                    <p className="text-foreground text-4xl font-black text-left tracking-[0.45em] leading-relaxed">
                        Experiments in art,<br />
                        film and AI
                    </p>
                </div>

                {/* Bottom right text */}
                <div className="absolute right-30 bottom-20" data-reveal>
                    <p className="text-foreground text-2xl font-black tracking-[0.45em] text-right leading-relaxed">
                        Turning pixels to<br />
                        stories
                    </p>
                </div>

            </div>

            <div className="w-full flex justify-between items-center pt-20 px-15" data-stagger>

                <div className="flex flex-col gap-6 max-w-2xl" data-stagger>
                    <h1 className="text-foreground text-1xl tracking-[0.45rem] font-black">Myself</h1>

                    <p className="text-foreground text-2xl font-black leading-relaxed tracking-[0.45em] text-justify">
                        I am a creative engineer working at the intersection of  artificial intelligence, cinema and design. 
                        My work explores visual systems, experimental storytelling, and creative computing. I build tools and 
                        films that blur the line between engineering and emotion.
                    </p>
                </div>

                <div className="flex justify-end">
                    <Image src={myself} alt="My Image" width={500} height={600} className="h-full w-auto pt-13" />
                </div>

            </div>

        </section>

    </main>
    )
}