import Facebook from "@/assets/icons/Facebook";
import Instagram from "@/assets/icons/Instagram";
import Linkedin from "@/assets/icons/Linkedin";
import Logo from "@/assets/icons/Logo";
import Twitter from "@/assets/icons/Twitter";
import Link from "next/link";


export default function Footer() {
    return (
        <footer className="">
            <div className="max-w-8xl mx-auto px-4 md:px-8 lg:px-16 py-[70px] bg-[rgba(136,238,2,0.1)] text-white grid grid-cols-1 lg:grid-cols-2 gap-14">
                {/* Brand */}
                <div className="space-y-4 lg:mx-0 mx-auto">
                    <Logo></Logo>
                    <p className="text-base leading-relaxed text-[rgba(0,43,17,0.7)] max-w-md">
                        GuideTravion is a modern travel companion platform that connects tourists
                        with verified local guides, curated tours, and authentic travel experiences
                        across Bangladesh.
                    </p>

                    {/* Social Icons */}
                    <div className="flex flex-wrap gap-1.5">
                        <Link href='#' className="bg-[rgba(136,238,2,0.15)] hover:bg-[rgba(0,43,17,0.9)] text-[rgba(0,43,17,0.8)] hover:text-white transition duration-300 inline-block p-2.5 rounded-lg"><Facebook></Facebook></Link>
                        <Link href='#' className="bg-[rgba(136,238,2,0.15)] hover:bg-[rgba(0,43,17,0.9)] text-[rgba(0,43,17,0.8)] hover:text-white transition duration-300 inline-block p-2.5 rounded-lg"><Instagram /></Link>
                        <Link href='#' className="bg-[rgba(136,238,2,0.15)] hover:bg-[rgba(0,43,17,0.9)] text-[rgba(0,43,17,0.8)] hover:text-white transition duration-300 inline-block p-2.5 rounded-lg"><Twitter></Twitter></Link>
                        <Link href='#' className="bg-[rgba(136,238,2,0.15)] hover:bg-[rgba(0,43,17,0.9)] text-[rgba(0,43,17,0.8)] hover:text-white transition duration-300 inline-block p-2.5 rounded-lg"><Linkedin></Linkedin></Link>
                    </div>
                </div>

                {/* FOOTER MENU ITEMS */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 lg:justify-items-end justify-items-center">
                    {/* For Travelers */}
                    <div className="space-y-3">
                        <h3 className="text-base font-semibold text-primary">For Travelers</h3>
                        <ul className="space-y-2 font-medium text-[14.5px] text-[rgba(0,43,17,0.7)]">
                            <li><Link href={'/tour'}>Explore Tours</Link></li>
                            <li><Link href='#topDestination'>Top Destinations</Link></li>
                            <li><Link href='#recentlyAdded'>Recently Added</Link></li>
                            {/* <li><Link href={'/faq'}>Reviews</Link></li> */}
                        </ul>
                    </div>

                    {/* Company */}
                    <div className="space-y-3">
                        <h3 className="text-base font-semibold text-primary">Company</h3>
                        <ul className="space-y-2 font-medium text-[14.5px] text-[rgba(0,43,17,0.7)]">
                            <li><Link href={'/about'}>About Us</Link></li>
                            <li><Link href='#whyGuideTravion'>Why GuideTravion</Link></li>
                            <li><Link href='#'>Privacy Policy</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="space-y-3">
                        <h3 className="text-base font-semibold text-primary">Services</h3>
                        <ul className="space-y-2 font-medium text-[14.5px] text-[rgba(0,43,17,0.7)]">
                            <li><Link href={'/register/guide'}>Become A Guide</Link></li>
                            <li><Link href={'#'}>Contact us</Link></li>
                            <li><Link href={'#'}>FAQ</Link></li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="bg-primary py-5 font-normal text-center text-sm text-white">
                Copyright © {new Date().getFullYear()}
                <span className="font-medium text-secondary"> GuideTravion</span>.
                All rights reserved.
            </div>
        </footer>
    );
}