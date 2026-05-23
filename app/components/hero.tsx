import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logo.png";
import myself from "../../public/myself.jpg";

export default function hero() {
    return(

    <main id="home">

        {/* Hero Section */}
        <section className="relative z-0" data-overlap-hero>

            <div className="w-full flex flex-col gap-8 px-4 py-10 sm:px-8 md:p-15 lg:p-30" data-stagger>
                <div className="w-full flex flex-col gap-6 sm:flex-row sm:justify-between sm:items-center">
                    <div className="items-center">
                        <h1 className="text-xl tracking-[0.25rem] sm:text-2xl sm:tracking-[0.35rem] md:text-3xl md:tracking-[0.45rem]">
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
                        <h1 className="text-xl tracking-[0.25rem] sm:text-2xl sm:tracking-[0.35rem] md:text-3xl md:tracking-[0.45rem] font-black mt-2" data-split-text>
                            CreativeEngineer
                        </h1>
                    </div>

                    <div className="hidden sm:flex justify-end">
                        <Image
                            src={logo}
                            alt="Logo"
                            width={300}
                            height={300}
                            className="w-[120px] sm:w-[200px] md:w-[300px] h-auto"
                        />
                    </div>
                </div>

                <div className="w-full flex flex-wrap justify-center items-center gap-x-4 gap-y-3 sm:gap-x-8 md:gap-x-12 pt-8 sm:pt-14 md:pt-20">

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

                <div className="flex justify-center pt-2 sm:pt-4">
                    <Link
                        href="/case-studies"
                        className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/8 px-5 py-3 text-xs font-semibold uppercase tracking-[0.28em] text-white/88 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/12"
                    >
                        Explore Case Studies
                    </Link>
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
                    className="w-full h-[420px] sm:h-[560px] md:h-[720px] lg:h-[860px] object-cover"
                    data-scroll-image-inner
                    data-overlap-image-inner
                    data-parallax="10"
                />

                {/* Left text */}
                <div className="absolute left-4 top-24 sm:left-12 sm:top-40 lg:left-30 -translate-y-1/2" data-reveal>
                    <p
                        className="text-foreground text-xl sm:text-2xl md:text-4xl font-black text-left tracking-[0.3em] sm:tracking-[0.45em] leading-relaxed"
                        data-split-text
                    >
                        Experiments in art,<br />
                        film and AI
                    </p>
                </div>

                {/* Bottom right text */}
                <div className="absolute right-4 bottom-8 sm:right-12 sm:bottom-20 lg:right-30" data-reveal>
                    <p
                        className="text-foreground text-lg sm:text-xl md:text-2xl font-black tracking-[0.3em] sm:tracking-[0.45em] text-right leading-relaxed"
                        data-split-text
                    >
                        Turning pixels to<br />
                        stories
                    </p>
                </div>

            </div>

            <div className="w-full flex flex-col gap-10 lg:flex-row lg:justify-between lg:items-center pt-12 sm:pt-16 md:pt-20 px-4 sm:px-8 lg:px-15" data-stagger>

                <div className="flex flex-col gap-6 max-w-2xl" data-stagger>
                    <h1 className="text-foreground text-1xl tracking-[0.45rem] font-black" data-split-text>
                        Myself
                    </h1>

                    <p
                        className="text-foreground text-lg sm:text-2xl font-black leading-relaxed tracking-[0.2em] sm:tracking-[0.45em] text-justify"
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

                <div className="flex justify-center lg:justify-end">
                    <Image
                        src={myself}
                        alt="My Image"
                        width={500}
                        height={600}
                        className="w-full max-w-sm mx-auto lg:max-w-none lg:w-auto h-auto pt-0 lg:pt-13"
                    />
                </div>

            </div>

        </section>

    </main>
    )
}
