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
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Josefin+Sans:wght@200;300;400&family=Lato:ital,wght@0,300;0,400;1,300;1,400&display=swap"
        />
      </head>
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
