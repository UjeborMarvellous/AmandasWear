import "./globals.css";
import { Inter } from "next/font/google";
import Header from "./components/Header";
// import Footer from './components/Footer'
// import { Providers } from './providers'
// import { CartProvider } from './components/CartProvider'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Fashion Brand E-commerce",
  description: "Shop the latest fashion trends",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className=" bg-BWhite/40 pb-1">
          {/* <Providers> */}
          {/* <CartProvider> */}
          <Header />
          <main className=" mx-auto">{children}</main>
          {/* <Footer /> */}
          {/* </CartProvider> */}
          {/* </Providers> */}
        </div>
      </body>
    </html>
  );
}
