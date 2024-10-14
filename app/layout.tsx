import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const suiteVariable = localFont({
  src: "./fonts/SUITE-Variable.woff2",
  variable: "--font-suite",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Mediaiplus Demo",
  description: "데모버전",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${suiteVariable.variable} antialiased font-suite`}
      >
        {children}
      </body>
    </html>
  );
}
