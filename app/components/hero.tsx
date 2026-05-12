import Image from "next/image";
import logo from "../../public/logo.png";
import myself from "../../public/myself.jpg";

export default function hero() {
    return(

    <main>

        {/* Hero Section */}
        <section className="relative z-0" data-overlap-hero>

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
                        <h1 className="text-3xl tracking-[0.45rem] font-black mt-2" data-split-text>
                            CreativeEngineer
                        </h1>
                    </div>

                    <div className="flex justify-end">
                        <Image src={logo} alt="Logo" width={300} height={300} />
                    </div>
                </div>

                <div className="w-full flex justify-center items-center gap-35 pt-20">

                    <h1 className="text-foreground text-sm tracking-[0.45rem] font-black" data-split-text>
                        AI
                    </h1>
                    <span className="text-foreground text-sm">•</span>
                    
                    <h1 className="text-foreground text-sm tracking-[0.45rem] font-black" data-split-text>
                        Artist
                    </h1>
                    <span className="text-foreground text-sm">•</span>

                    <h1 className="text-foreground text-sm tracking-[0.45rem] font-black" data-split-text>
                        Cinematographer
                    </h1>
                    <span className="text-foreground text-sm">•</span>

                    <h1 className="text-foreground text-sm tracking-[0.45rem] font-black" data-split-text>
                        Designer
                    </h1>

                </div>
            </div>

        </section>

        {/* Sky image */}

        <section
            className="relative z-10 -mt-16 rounded-t-[2rem] overflow-hidden"
            data-overlap-image
            data-scroll-image
        >

            <div className="w-full relative p-2 overflow-hidden" data-overlap-frame>

                <Image
                    src="/banner.jpg"
                    alt="Sky Image"
                    width={1000}
                    height={600}
                    className="w-full h-[600px] md:h-[720px] object-cover"
                    data-scroll-image-inner
                    data-overlap-image-inner
                    data-parallax="18"
                />

                {/* Left text */}
                <div className="absolute left-30 top-40 -translate-y-1/2" data-reveal>
                    <p
                        className="text-foreground text-4xl font-black text-left tracking-[0.45em] leading-relaxed"
                        data-split-text
                    >
                        Experiments in art,<br />
                        film and AI
                    </p>
                </div>

                {/* Bottom right text */}
                <div className="absolute right-30 bottom-20" data-reveal>
                    <p
                        className="text-foreground text-2xl font-black tracking-[0.45em] text-right leading-relaxed"
                        data-split-text
                    >
                        Turning pixels to<br />
                        stories
                    </p>
                </div>

            </div>

            <div className="w-full flex justify-between items-center pt-20 px-15" data-stagger>

                <div className="flex flex-col gap-6 max-w-2xl" data-stagger>
                    <h1 className="text-foreground text-1xl tracking-[0.45rem] font-black" data-split-text>
                        Myself
                    </h1>

                    <p
                        className="text-foreground text-2xl font-black leading-relaxed tracking-[0.45em] text-justify"
                        data-myself-text
                    >
                        {(
                            "I am a creative engineer working at the intersection of artificial intelligence, cinema and design. " +
                            "My work explores visual systems, experimental storytelling, and creative computing. " +
                            "I build tools and films that blur the line between engineering and emotion."
                        )
                            .split(" ")
                            .map((word, index) => (
                                <span
                                    key={`myself-word-${index}`}
                                    className="inline-block mr-3"
                                    data-myself-word
                                >
                                    {word}
                                </span>
                            ))}
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