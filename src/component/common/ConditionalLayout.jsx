"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/component/common/Navbar";
import Footer from "@/component/common/Footer";

export default function ConditionalLayout({ children }) {
  const pathname = usePathname();

  return (
    <>
      {pathname === "/sign-in" || pathname === "/sign-up" ? null : <Navbar />}
      {children}
      <Footer />
    </>
  );
}