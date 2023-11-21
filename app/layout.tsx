import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/IcmNavbar";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Home Page - InnerCity HQ",
  description:
    "The InnerCity Mission for Children is a full-fledged faith-based Non-Governmental Organisation [NGO] in Consultative Status with the United Nations [UN]; It is under the auspices of Pastor Chris Oyakhilome Foundation.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>{/* <title key={'title'}> </title> */}</Head>

      <body data-class={inter.className}>
        <header>
          {/* <Header /> */}
          <Navbar />
        </header>

        <main>{children}</main>
      </body>
    </html>
  );
}
