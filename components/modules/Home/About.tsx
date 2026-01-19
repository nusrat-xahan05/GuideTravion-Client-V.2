"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import aboutImg from "@/assets/images/bandar.jpg"
import DealsOffer from "./DealsOffer";
import WhyChooseUs from "./WhyChooseUs";

export default function About() {
    return (
        <div className="space-y-20 pt-12">

            {/* HERO SECTION */}
            <section className="relative overflow-hidden bg-linear-to-t from-[rgba(136,238,2,0.5)] to-white text-white">
                <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-primary text-4xl md:text-5xl font-bold leading-tight">
                            About GuideTravion
                        </h1>
                        <p className="text-primary mt-4 text-lg opacity-90">
                            A trusted platform connecting travelers with verified local guides
                            to create unforgettable travel experiences.
                        </p>

                        <div className="flex flex-wrap gap-3 mt-6">
                            <Badge variant="secondary">Trusted Guides</Badge>
                            <Badge variant="secondary">Secure Booking</Badge>
                            <Badge variant="secondary">Local Experiences</Badge>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative w-full h-72 md:h-96 rounded-2xl overflow-hidden shadow-xl"
                    >
                        <Image
                            src={aboutImg}
                            alt="Travel with GuideTravion"
                            fill
                            className="object-cover"
                        />
                    </motion.div>
                </div>
            </section>

            {/* MISSION & VISION */}
            <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                    <CardContent className="p-6 space-y-3">
                        <h2 className="text-xl font-semibold">Our Mission</h2>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Our mission is to empower travelers by connecting them with
                            experienced, verified local guides, ensuring safe, meaningful,
                            and culturally rich journeys.
                        </p>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="p-6 space-y-3">
                        <h2 className="text-xl font-semibold">Our Vision</h2>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            To become the most trusted travel companion platform where
                            authentic experiences and local expertise redefine tourism.
                        </p>
                    </CardContent>
                </Card>
            </section>

            {/* WHY CHOOSE US */}
            <WhyChooseUs></WhyChooseUs>

            {/* HOW IT WORKS */}
            <section className="max-w-7xl mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[{
                        step: "01",
                        title: "Discover Tours",
                        desc: "Browse tours created by verified guides across destinations."
                    }, {
                        step: "02",
                        title: "Book Securely",
                        desc: "Choose your tour and book with confidence through our platform."
                    }, {
                        step: "03",
                        title: "Travel & Explore",
                        desc: "Enjoy memorable experiences guided by local experts."
                    }].map((step, i) => (
                        <Card key={i}>
                            <CardContent className="p-6 space-y-3">
                                <span className="text-primary font-bold text-xl">{step.step}</span>
                                <h3 className="text-lg font-semibold">{step.title}</h3>
                                <p className="text-sm text-gray-600">{step.desc}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>

            {/* FOOTER CTA */}
            <DealsOffer></DealsOffer>

        </div>
    );
}
