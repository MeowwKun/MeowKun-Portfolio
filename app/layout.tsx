import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import SmoothScrollProvider from "./components/smooth-scroll-provider";
import CustomCursor from "./components/custom-cursor";
import EntryLoader from "./components/entry-loader";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "MeowKun",
  description: "Creative Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} antialiased`}
      >
        <SmoothScrollProvider>
          <EntryLoader />
          {children}
          <CustomCursor />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
