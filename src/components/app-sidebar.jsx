"use client";

import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import { SignedIn, UserButton, useUser } from "@clerk/nextjs";
import { Home, Settings } from "lucide-react";
import Link from "next/link";

export function AppSidebar() {
  const { user } = useUser();
  return (
    <Sidebar
      side="left"
      collapsible="offcanvas"
      className="bg-gray-900 text-gray-100"
    >
      <SidebarHeader className="border-b border-gray-700 bg-[#28354D]">
        <h2 className="text-lg font-bold px-4 text-white">My App</h2>
      </SidebarHeader>

      <SidebarContent className={"bg-[#28354D]"}>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="hover:bg-gray-800 hover:text-white"
            >
              <Link href="/dashboard" className="flex items-center gap-2">
                <Home className="h-9 w-9 text-gray-300 text-2xl" />
                <span>Home</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="hover:bg-gray-800 hover:text-white"
            >
              <Link 
              // href="/settings" 
              href="/#"
              className="flex items-center gap-2">
                <Settings className="h-9 w-9 text-gray-300" />
                <span>Settings</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>


      <SidebarFooter className="border-t bg-[#28354D] border-gray-700 cursor-pointer">
        <SignedIn>
          <div className="flex items-center justify-between px-4 py-2">
            <div className="text-sm text-gray-200">
              {user?.primaryEmailAddress?.emailAddress}
            </div>

            <UserButton afterSignOutUrl="/" />
          </div>
        </SignedIn>
      </SidebarFooter>
    </Sidebar>
  );
}