"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";


export default function ContactForm() {
    return (
        <div className="space-y-20 pt-12">
            <section className="relative overflow-hidden bg-linear-to-t from-[rgba(136,238,2,0.5)] to-white text-white">
                <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col items-center justify-center text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-3xl"
                    >
                        <h1 className="text-primary text-4xl md:text-5xl font-bold leading-tight">
                            Contact GuideTravion
                        </h1>
                        <p className="text-primary mt-4 text-lg opacity-90">
                            Have questions about tours, guides, or bookings? Our team is ready
                            to help you explore Bangladesh with confidence.
                        </p>
                    </motion.div>
                </div>

                {/* CONTACT SECTION */}
                <section className="max-w-7xl mx-auto px-6 pt-5 pb-20 grid md:grid-cols-2 gap-12">

                    {/* CONTACT FORM */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <Card className="shadow-lg border-0">
                            <CardContent className="p-8 space-y-6">

                                <h2 className="text-2xl font-semibold text-primary">
                                    Send us a message
                                </h2>

                                <div className="grid gap-4">
                                    <Input placeholder="Your Name" />

                                    <Input type="email" placeholder="Email Address" />

                                    <Input placeholder="Subject" />

                                    <Textarea
                                        placeholder="Write your message..."
                                        className="min-h-[120px]"
                                    />

                                    <Button className="bg-[#86EE02] hover:bg-[#6fd000] text-black font-semibold">
                                        Send Message
                                    </Button>
                                </div>

                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* CONTACT INFO */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6"
                    >

                        <Card className="border-0 shadow-md">
                            <CardContent className="flex items-center gap-4 p-6">
                                <div className="bg-[#86EE02] p-3 rounded-xl">
                                    <Mail className="text-black w-6 h-6" />
                                </div>

                                <div>
                                    <p className="font-semibold text-primary">Email</p>
                                    <p className="text-sm text-muted-foreground">
                                        support@guidetravion.com
                                    </p>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="border-0 shadow-md">
                            <CardContent className="flex items-center gap-4 p-6">
                                <div className="bg-[#86EE02] p-3 rounded-xl">
                                    <Phone className="text-black w-6 h-6" />
                                </div>

                                <div>
                                    <p className="font-semibold text-primary">Phone</p>
                                    <p className="text-sm text-muted-foreground">
                                        +880 1234 567 890
                                    </p>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="border-0 shadow-md">
                            <CardContent className="flex items-center gap-4 p-6">
                                <div className="bg-[#86EE02] p-3 rounded-xl">
                                    <MapPin className="text-black w-6 h-6" />
                                </div>

                                <div>
                                    <p className="font-semibold text-primary">Office</p>
                                    <p className="text-sm text-muted-foreground">
                                        Dhaka, Bangladesh
                                    </p>
                                </div>
                            </CardContent>
                        </Card>

                    </motion.div>
                </section>
            </section>

            {/* MAP SECTION */}
            <section className="max-w-7xl mx-auto px-6 pb-20">
                <Card className="overflow-hidden border-0 shadow-lg">
                    <iframe
                        src="https://maps.google.com/maps?q=dhaka&t=&z=13&ie=UTF8&iwloc=&output=embed"
                        className="w-full h-[400px] border-0"
                        loading="lazy"
                    />
                </Card>
            </section>

        </div>
    )
}