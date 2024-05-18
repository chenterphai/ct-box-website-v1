import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Provider from "./provider";
import NavigationBar from "@/components/NavigationBar";
import { Suspense } from "react";
import Loading from "./loading";
import FooterSection from "@/components/Footer";


const inter = Poppins({ subsets: ["latin"], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <NavigationBar />
          <Suspense fallback={<Loading />}>
            {children}
          </Suspense>
          <FooterSection />
        </Provider>
      </body>
    </html>
  );
}
