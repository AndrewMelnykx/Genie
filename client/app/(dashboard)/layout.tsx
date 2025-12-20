import Navbar from "@/components/navbar";
import { ThemeWrapper } from "@/components/providers/theme";
import Sidebar from "@/components/sidebar/index";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" h-full relative  ">
      <ThemeWrapper>
        <div className="hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 bg-gray-900 ">
          <Sidebar />
        </div>
        <main className="md:pl-72">
          <Navbar /> {children}
        </main>
        <div className="hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 bg-gray-900 ">
          <Sidebar />
        </div>
        <main className="md:pl-72">
          <Navbar /> {children}
        </main>
      </ThemeWrapper>
    </div>
  );
};

export default DashboardLayout;
