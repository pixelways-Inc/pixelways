import Preloader from "@/layout/Preloader";
import TawkScript from "../components/TawkScript";
import "./globals.css";

import "@css/aos.css";
import "@css/bootstrap.min.css";
import "@css/flaticon.min.css";
import "@css/fontawesome-5.14.0.min.css";
import "@css/magnific-popup.min.css";
import "@css/nice-select.min.css";
import "@css/slick.min.css";
import "@css/style.css";

export const metadata = {
  title: "Pixelways Inc - Digital Solutions & IT Consulting",
  description:
    "Pixelways Inc delivers innovative digital solutions, IT consulting, and technology services to help your business thrive. Based in Toronto, serving clients globally with expertise, reliability, and a personal touch.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Preloader />
        {children}
        <TawkScript />
      </body>
    </html>
  );
}
