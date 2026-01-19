"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";


export default function DealsOffer() {
    return (
        <section className="max-w-8xl mx-auto py-16 px-4 md:px-8 lg:px-16">
            <div className="py-16 bg-primary text-center rounded-[50px]">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="relative z-10 max-w-3xl mx-auto text-center text-white"
                >
                    <div className="font-paytone text-2xl lg:text-[32px] text-white px-3.5 md:px-0">
                        <h4>Be Ready to</h4>
                        <h3 className="text-3xl lg:text-4xl text-secondary">Explore Bangladesh</h3>
                        <h4>Like You&apos;ve Never Experienced Before</h4>
                    </div>

                    <p className="text-[15px] text-[rgba(255,255,255,0.7)] mt-2 mb-6">We have many special offers especially for you</p>

                    <Link href={'/tour'}>
                        <Button className="px-8 py-6 text-[17px] font-semibold text-primary transition duration-300 bg-secondary hover:bg-white border border-secondary hover:border-primary cursor-pointer">
                            Get Started
                        </Button>
                    </Link>
                </motion.div>
                {/* <div className="font-paytone text-2xl lg:text-[32px] text-white px-3.5 md:px-0">
                    <h4>Be Ready to</h4>
                    <h3 className="text-3xl lg:text-4xl text-secondary">Explore Bangladesh</h3>
                    <h4>Like You&apos;ve Never Experienced Before</h4>
                </div>
                <p className="text-[15px] text-[rgba(255,255,255,0.7)] mt-2 mb-6">We have many special offers especially for you</p>
                <Link href={'/tour'}>
                    <Button className="px-8 py-6 text-[17px] font-semibold text-primary transition duration-300 bg-secondary hover:bg-white border border-secondary hover:border-primary cursor-pointer">
                        Get Started
                    </Button>
                </Link> */}
            </div>
        </section>
    );
}
