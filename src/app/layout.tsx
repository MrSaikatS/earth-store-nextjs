import ThemeProvider from "@/components/DarkMode/ThemeProvider";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/NavBars/Header";
import { roboto } from "@/lib/fonts";
import { ReactNode } from "react";
import "./globals.css";

type RootLayoutProps = {
  children: ReactNode;
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${roboto.variable} scrollbar-thin overflow-y-scroll scroll-smooth antialiased`}>
      <body className="font-roboto">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          themes={["light", "dark"]}>
          <Header />

          <main className="mx-auto">{children}</main>

          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
