import { MainLayout } from "@/components";
import "@/styles/globals.css";
import { Montserrat, Playfair_Display } from "next/font/google";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
  return (
    <div className={`${montserrat.variable} ${playfairDisplay.variable}`}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </div>
  );
}
