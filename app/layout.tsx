import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Powder Pass — NYC's Mountain Transport Membership",
  description: "$30 rides to Hunter, Windham, and more. Not $100. A membership-based transport service for NYC snowboarders.",
  openGraph: {
    title: "Powder Pass — NYC's Mountain Transport Membership",
    description: "$30 rides to Hunter, Windham, and more. Not $100.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
