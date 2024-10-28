import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import UserProvider from "@/providers/UserProvider";
import { Inter } from "next/font/google";
import MiniSidebar from "./Components/MiniSidebar/MiniSidebar";
import Header from "./Components/Header/Header";
import MainLayout from "@/providers/MainLayout";
import SidebarProvider from "@/providers/SidebarProvider";
import MainContentLayout from "@/providers/MainContentLayout";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <UserProvider>
          <Toaster position="top-center" />

          <div className="h-full flex overflow-hidden">
            <MiniSidebar />
            <div className="flex-1 flex flex-col">
              <Header />
              <MainContentLayout>
                <MainLayout>{children}</MainLayout>
                {/* <SidebarProvider /> */}
              </MainContentLayout>
            </div>
          </div>

          {children}
        </UserProvider>
      </body>
    </html>
  );
}
