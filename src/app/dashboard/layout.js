import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

export default function Layout({ children }) {
  return (
    <SidebarProvider defaultOpen={false}>   {/* force closed by default */}
      <AppSidebar />
      <main className="flex-1 flex flex-col gap-6 p-4">
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  );
}