import "@/styles/globals.css";
import "@/styles/DashBoard.css";
import "@/styles/Product.css";
import "@/styles/News.css";
import "@/styles/Filter.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
