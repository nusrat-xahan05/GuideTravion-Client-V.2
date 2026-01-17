import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { getUserRole } from "@/services/auth/getUserRole";
import { getDefaultDashboardRoute } from "@/lib/navbar-auth-routes";
import LogoutButton from "./Auth/LogoutButton";
import Logo from "@/assets/icons/Logo";


const Navbar = async () => {
    const navItems = [
        { href: "/", label: "Home" },
        { href: "/about", label: "About" },
        { href: "/tour", label: "Explore Tours" },
        { href: "/#", label: "Contact" },
        { href: "/#", label: "Blog" },
    ];

    const userRole = await getUserRole();
    const dashboardLink = userRole ? getDefaultDashboardRoute(userRole) : '/';


    return (
        <header className="w-full">
            <div className="mx-auto max-w-[1250px] py-4 flex items-center justify-between px-6">

                {/* Left: Logo */}
                <Link href="/">
                    <Logo></Logo>
                </Link>

                {/* Middle Nav */}
                <nav className="hidden md:flex items-center space-x-8 bg-[rgba(255,255,255,0.6)] shadow-md px-5 rounded-[80]">
                    {navItems.map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            className="px-3.5 py-[11.5] mx-1.5 font-body font-medium tracking-wide text-[14.5px] text-[rgba(0,43,17,.9)] hover:text-secondary transition-all duration-300 ease-out">
                            {item.label}
                        </Link>
                    ))}

                    {userRole && (
                        <Link
                            href={dashboardLink}
                            className="px-3.5 py-[11.5] mx-1.5 font-body font-medium tracking-wide text-[14.5px] text-[rgba(0,43,17,.9)] hover:text-secondary transition-all duration-300 ease-out">
                            Dashboard
                        </Link>
                    )}
                </nav>

                {/* Right: Auth Buttons */}
                <div className="hidden md:flex items-center space-x-3">
                    {!userRole ? (
                        <>
                            <Link href="/login">
                                <Button 
                                    variant="outline"
                                    className="transition duration-300 rounded-[80] px-7 py-[21.5] bg-transparent hover:bg-white/20 border-0 hover:border hover:border-white font-body font-semibold tracking-wide text-[14.5px] text-[rgba(0,43,17,.9)] cursor-pointer">
                                    Login
                                </Button>
                            </Link>

                            <Link href="/register/tourist">
                                <Button
                                    variant="outline"
                                    className="transition duration-300 rounded-[80] px-7 py-[21.5] bg-secondary shadow-md hover:bg-primary font-body font-semibold tracking-wide text-[14.5px] text-[rgba(0,43,17,.9)] hover:text-secondary border-none cursor-pointer">
                                    Sign Up
                                </Button>
                            </Link>
                        </>
                    ) : (
                        <LogoutButton></LogoutButton>
                    )}
                </div>

                {/* Mobile Menu */}
                <div className="md:hidden">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="outline" className="rounded-lg border-gray-300 cursor-pointer">
                                <Menu />
                            </Button>
                        </SheetTrigger>

                        <SheetContent side="right" className="p-6 w-[300px]">
                            <SheetTitle className="sr-only">Mobile Menu</SheetTitle>

                            <div className="flex flex-col space-y-5 mt-10">
                                {navItems.map((item) => (
                                    <Link
                                        key={item.label}
                                        href={item.href}
                                        className="text-[17px] font-medium hover:text-blue-600 transition duration-300"
                                    >
                                        {item.label}
                                    </Link>
                                ))}

                                {userRole && (
                                    <Link
                                        href={dashboardLink}
                                        className="text-[17px] font-medium hover:text-blue-600 transition duration-300"
                                    >
                                        Dashboard
                                    </Link>
                                )}

                                <div className="border-t pt-5 flex flex-col space-y-4">
                                    {!userRole ? (
                                        <>
                                            <Link href="/register">
                                                <Button
                                                    variant="outline"
                                                    className="w-full rounded-xl border-blue-600 text-blue-600 hover:bg-blue-50 cursor-pointer"
                                                >
                                                    Register
                                                </Button>
                                            </Link>

                                            <Link href="/login">
                                                <Button className="w-full rounded-xl bg-blue-600 hover:bg-blue-700 cursor-pointer">
                                                    Login
                                                </Button>
                                            </Link>
                                        </>
                                    ) : (
                                        <LogoutButton></LogoutButton>
                                    )}
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
