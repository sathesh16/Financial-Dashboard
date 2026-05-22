import { Outlet } from "react-router-dom";
import Sidebar from "../components/layout/Sidebar";
import Header from "../components/layout/Header";
import useSidebar from "../hooks/useSidebar";

export default function MainLayout() {

  const { isOpen, closeSidebar, toggleSidebar, } = useSidebar();

  return (
    <div className="min-h-screen bg-slate-950 text-white flex">
      <Sidebar
        isOpen={isOpen}
        closeSidebar={closeSidebar}
      />
      <div className="flex-1 flex flex-col">
        <Header toggleSidebar={toggleSidebar} />

        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}