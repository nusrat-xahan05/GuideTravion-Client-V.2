"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Users, Globe, ShieldCheck, Star } from "lucide-react";
import { motion } from "framer-motion";
import SectionTitle from "@/components/shared/Home/SectionTitle";


export default function WhyChooseUs() {
    return (
        <section className="max-w-8xl mx-auto my-20 px-4 md:px-8 lg:px-16">
            <SectionTitle title="Why Choose GuideTravion" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[{
                    icon: ShieldCheck,
                    title: "Verified Guides",
                    desc: "All guides are verified by our admin team for quality and trust."
                }, {
                    icon: Globe,
                    title: "Local Expertise",
                    desc: "Explore destinations through knowledgeable local professionals."
                }, {
                    icon: Users,
                    title: "Tourist Friendly",
                    desc: "Designed for seamless experience for both tourists and guides."
                }, {
                    icon: Star,
                    title: "Quality Experiences",
                    desc: "Curated tours focused on safety, comfort, and enjoyment."
                }].map((item, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: idx * 0.1 }}
                        viewport={{ once: true }}
                    >
                        {/* Hover Motion Layer */}
                        <motion.div
                            whileHover={{ y: -6, scale: 1.03 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            className="h-full"
                        >
                            <Card className="h-full group transition duration-300 hover:bg-primary">
                                <CardContent className="p-6 text-center space-y-3 transition duration-300 group-hover:text-white">

                                    <div className="bg-[#86EE02] p-3 rounded-2xl inline-block transition duration-300">
                                        <item.icon className="w-8 h-8 mx-auto text-[rgba(0,43,17,0.9)] transition duration-300" />
                                    </div>

                                    <h3 className="font-semibold text-primary text-lg transition duration-300 group-hover:text-white">
                                        {item.title}
                                    </h3>

                                    <p className="text-sm text-[rgba(0,43,17,0.8)] transition-colors duration-300 group-hover:text-white/90">
                                        {item.desc}
                                    </p>

                                </CardContent>
                            </Card>
                        </motion.div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}