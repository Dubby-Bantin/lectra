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
        url: "https://private-user-images.githubusercontent.com/157697665/391287369-4b37a6bc-5191-47e4-8d2a-8f3958eddeb4.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzMwMDA5OTEsIm5iZiI6MTczMzAwMDY5MSwicGF0aCI6Ii8xNTc2OTc2NjUvMzkxMjg3MzY5LTRiMzdhNmJjLTUxOTEtNDdlNC04ZDJhLThmMzk1OGVkZGViNC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQxMTMwJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MTEzMFQyMTA0NTFaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1mODJmZjhiZjI3MDk5Yjc2MGU2YWJiMTUxZjQ2NjhjNDJlMDM3MTZkYTc3ZjY2NGIwODdmNDQ3MDFiNGQ0ZGUwJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.D20zFSNYG91WvtT1ftoY-_DAQfF9t8vpOH7HZ33E7Mk",
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
