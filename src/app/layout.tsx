import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeProvider";
import NavbarWrapper from "@/components/common/NavBarWrapper";
import { Toaster } from "sonner";
import GTranslate from "@/components/common/GTranslate";
import Provider from "@/providers/Provider";
export const metadata: Metadata = {
  title: "Lectra",
  description: "Generated by create next app",
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
