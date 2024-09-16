import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Toaster } from "react-hot-toast";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { ThemeProvider } from "@/providers/theme-provider";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "500",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Next Shop",
  description: "Next shop - simple online shop",
  keywords: ['next shop', 'online shop', 'ecommerce', 'shop'],
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
  },
  openGraph: {
    title: "Next Shop",
    description: "Next shop - simple online shop",
    url: "https://next-shop-asadbek.vercel.app/",
    siteName: "Next Shop",
    images: ["/logo.svg"],
    locale: "en-US",
    type: "website",
  },
  authors: [
    { name: "Asadbek Rakhimov", url: "https://github.com/asadbekme" },
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={montserrat.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <Toaster />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
