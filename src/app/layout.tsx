import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeProvider";
import NavbarWrapper from "@/components/common/NavBarWrapper";
import { Toaster } from "sonner";
import GTranslate from "@/components/common/GTranslate";
import Provider from "@/providers/Provider";

export const metadata: Metadata = {
  metadataBase: new URL("https://lectra.vercel.app/"),
  title: {
    default: "Lectra - Transform Your Learning Experience",
    template: `%s | Lectra`,
  },
  description:
    "Lectra is your go-to platform for interactive learning, featuring expert instructors, real-time lectures, and cutting-edge educational tools.",
  keywords: [
    "Lectra, online learning, interactive education, expert instructors, real-time lectures, e-learning platform",
  ],
  openGraph: {
    description:
      "Join Lectra for an innovative learning journey with expert instructors, interactive sessions, and a vibrant educational community.",
    url: "https://lectra.vercel.app/",
    type: "website",
    siteName: "Lectra",
    images: [
      {
        url: "/images/home.png",
        width: 1200,
        height: 630,
        alt: "Lectra - Transform Your Learning Experience",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={`antialiased font-lato relative`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <NavbarWrapper />
          <GTranslate />
          <Toaster position="top-center" richColors />
          <Provider>{children}</Provider>
        </ThemeProvider>
      </body>
    </html>
  );
}
