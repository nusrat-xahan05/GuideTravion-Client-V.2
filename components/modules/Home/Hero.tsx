"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { HeroProps } from "@/types/heroProps";
import bgImage from "../../../assets/images/Banner.png"
import bdImage from "../../../assets/images/bd-map.png"
import Image from "next/image";
import Link from "next/link";
import { HeroSearch } from "@/components/shared/Home/HeroSearch";


// HOMEPAGE BANNER PROPS ---------
const defaultProps: HeroProps = {
    badge: { text: "Explore Bangladesh" },
    heading: {
        line1: "Discover Your Next",
        line2: "Adventure with ",
        line3: "GuideTravion",
    },
    description: {
        text: "Connect with trusted guides and explore authentic destinations. Book tours, get local insights, and enjoy personalized travel."
    },
    buttons: {
        primary: { text: "Explore Tours" },
        secondary: { text: "Become a Guide" },
    }
};

export default function Hero(props: HeroProps = defaultProps) {
    const {
        badge,
        heading,
        description,
        buttons
    } = { ...defaultProps, ...props };

    return (
        <section className="relative w-full min-h-screen pt-32 pb-24 flex items-center justify-center">
            {/* -------- BACKGROUND IMAGE -------- */}
            <div className="absolute inset-0 bg-cover bg-center">
                <Image
                    src={bgImage}
                    alt="Banner"
                    fill
                    className="object-cover"
                    priority
                />
                {/* --- BACKGROUND OVERLAY --- */}
                <div className="absolute inset-0 bg-linear-to-b from-[rgba(226,221,221,0.6)] via-black/45 to-[rgba(0,0,0,0.8)]" />
            </div>

            {/* Content */}
            <div className="relative z-10 w-full px-4 md:px-10 flex flex-col items-center text-center">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 inline-flex items-center gap-2 bg-[rgba(136,238,2,0.6)] px-4 py-2 rounded-full"
                >
                    <span className="text-xs font-body font-semibold text-[rgba(0,43,17,0.85)] flex items-center gap-1.5">{badge?.text}
                        <Image
                            src={bdImage}
                            alt="Banner"
                            height={15}
                            width={15}
                        />
                    </span>
                </motion.div>

                {/* Headings */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="font-paytone text-white text-5xl md:text-6xl leading-tight"
                >
                    {heading?.line1}
                    <br />
                    {heading?.line2}
                    <span>{heading?.line3}</span>
                </motion.h1>


                {/* Description */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="mt-4 text-white/80 text-lg space-y-1 max-w-2xl"
                >
                    <p>{description?.text}</p>
                </motion.div>

                {/* Buttons */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mt-8 flex flex-col sm:flex-row gap-4"
                >
                    {buttons?.primary && (
                        <Link href={'/tour'}>
                            <Button className="px-8 py-6 text-[17px] font-semibold text-primary hover:text-secondary transition duration-300 bg-secondary hover:bg-primary border border-secondary hover:border-primary cursor-pointer">
                                {buttons.primary.text}
                            </Button>
                        </Link>
                    )}

                    {buttons?.secondary && (
                        <Link href={'/register/guide'}>
                            <Button
                                variant="outline"
                                className="px-8 py-6 text-[17px] font-semibold text-white bg-white/20 border border-white cursor-pointer"
                            >
                                {buttons.secondary.text}
                            </Button>
                        </Link>
                    )}
                </motion.div>


                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="mt-10 w-full flex justify-center"
                >
                    <HeroSearch />
                </motion.div>
            </div>
        </section>
    );
}
