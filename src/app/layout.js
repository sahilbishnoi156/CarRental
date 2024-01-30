import { Roboto_Condensed } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Navbar/Navbar";
import Footer from "@/Components/Footer/Footer";

const JuliusSansOne = Roboto_Condensed({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: {
    default: "Kanha Tour & Travells - Self Drive Car Rental",
    template: "%s | Kanha Tour & Travells",
  },
  description:
    "Experience the freedom and flexibility of exploring your destination at your own pace with our reliable and convenient self-drive car rental service.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favic/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favic/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favic/favicon-16x16.png"
        />
        <link rel="manifest" href="/favic/site.webmanifest" />
      </head>
      <body className={JuliusSansOne.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
