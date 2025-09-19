import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import ConditionalLayout from "@/component/common/ConditionalLayout";
import { saveUserinMongoDB } from "@/lib/saveUserinMongoDB";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Post Pilot",
  description: "AI-powered social media posts generator",
};

export default async function RootLayout({ children }) {
  try {
    await saveUserinMongoDB();
  } catch (error) {
    console.error("Error in RootLayout:", error);
  }
  
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased p-0 m-0 box-border bg-gray-50`}
        >
          <ConditionalLayout>
            {children}
          </ConditionalLayout>
        </body>
      </html>
    </ClerkProvider>
  );
}