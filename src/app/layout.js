import { Inter } from "next/font/google";
import "./globals.css";
import Page from "@/components/sidebar/page";
import Navbar from "@/components/navbar/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "technospurs | task",
  description: "Generated by create next app & server side rendering",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <Navbar />
          <Page />

          <div className="p-4 sm:ml-64">
            <div className="rounded-lg dark:border-gray-700 mt-20">
              {children}
            </div>
          </div>
      </body>
    </html>
  );
}
