import { getPages } from "@/sanity/sanity-utils";
import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pedro Carloto's homepage",
  description: "This is the webpage from Pedro Carloto",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pages = await getPages();
  return (
    <html lang="en">
      <body className="max-w-4xl mx-auto py-10 p-3 lg:p-0 lg:py-10">
        <header className="flex items-center justify-between">
          <Link
            href="/"
            className="custom-gradient text-lg font-bold"
            >
            Pedro
          </Link>
          <div className="flex items-center gap-5 text-sm text-gray-600">
            {pages.map((page) => (
              <Link key={page._id} href={`/${page.slug}`} className="hover:underline">
                {page.title}
              </Link>
            ))}
          </div>
        </header>
        <main className="py-20">{children}</main>
        <Analytics />
      </body>
    </html>
  );
}
