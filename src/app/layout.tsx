import { Open_Sans } from "next/font/google";
import PageTransition from "./components/PageTransition";
import "./globals.css";

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
});


export const metadata = {
  title: "Kenai",
  description: "Plataforma de streaming",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={openSans.variable}>
      <body className={`${openSans.variable} antialiased`}>
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
