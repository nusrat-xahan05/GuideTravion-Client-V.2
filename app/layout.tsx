import type { Metadata } from "next";
import { Inter, Paytone_One } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { Suspense } from "react";
import LoginSuccessToast from "@/components/shared/Auth/LoginSuccessToast";
import LogoutSuccessToast from "@/components/shared/Auth/LogoutSuccessToast";
import NextTopLoader from "nextjs-toploader";

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const paytoneOne = Paytone_One({
  subsets: ["latin"],
  variable: "--font-paytone-one",
  weight: "400", // Paytone One has only 400
});

export const metadata: Metadata = {
  title: "GuideTravion",
  description: "Discover Your Next Adventure",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${paytoneOne.variable} antialiased`}
      >
        <NextTopLoader
          color="#2563eb"
          height={3}
          showSpinner={false}
        />
        {children}
        <Toaster position="bottom-right" richColors />
        <Suspense fallback={null}>
          <LoginSuccessToast />
          <LogoutSuccessToast />
        </Suspense>
      </body>
    </html>
  );
}
