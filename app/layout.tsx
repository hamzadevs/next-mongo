"use client";
import { Providers } from "@/redux/provider";
import "./globals.css";
import { Inter } from "next/font/google";
import { QueryClient, QueryClientProvider } from "react-query";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Create a client
  const queryClient = new QueryClient();
  return (
    <html lang="en">
        <QueryClientProvider client={queryClient}>
      <body className={inter.className}>
          <Providers>{children}</Providers>
      </body>
        </QueryClientProvider>
    </html>
  );
}
