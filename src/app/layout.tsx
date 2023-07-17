import { Source_Sans_3 } from "next/font/google";
import "./globals.css";
import Header from "@/components/Layout/header";
import Footer from "@/components/Layout/footer";

const sourceSans = Source_Sans_3({ subsets: ["latin"] });

export const metadata = {
  title: "Movie DB Challenge",
  description: "A nextJs app for take a look in the movies",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={sourceSans.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
