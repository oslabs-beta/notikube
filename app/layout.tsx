import type { Metadata } from "next";
import { Inter } from "next/font/google";
import './globals.css'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NotiKube",
  description:
    "NotiKube is an incident management platform for Kubernetes Clusters",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.svg" sizes="any" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
