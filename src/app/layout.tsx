import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Cultural Diplomat Impact Organization",
  description:
    "Raising Leaders Through Faith, Entrepreneurship & Education. Empowering the next generation of cultural leaders and innovators.",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='75' font-size='75' font-weight='bold' fill='%23D4AF37'>CD</text></svg>",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-primary overflow-x-hidden">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
