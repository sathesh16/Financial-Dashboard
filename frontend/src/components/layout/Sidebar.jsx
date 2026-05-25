import NavItem from "./NavItem";
import { navigation } from "@/constants/navigation.js";

export default function Sidebar({
    isOpen,
    closeSidebar,
}) {
    return (
        <>
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 lg:hidden"
                    onClick={closeSidebar}
                />
            )}

            <aside
                className={`
          fixed lg:static
          top-0 left-0
          h-screen
          w-64
          bg-slate-900
          border-r border-slate-800
          transition-transform duration-300
          z-50

          ${isOpen
                        ? "translate-x-0"
                        : "-translate-x-full"
                    }

          lg:translate-x-0
        `}
            >
                <div className="p-6">
                    <h2 className="text-xl font-bold">
                        FinancePro
                    </h2>
                </div>

                <nav className="px-3 space-y-2">
                    {
                        navigation.map((item) => (
                            <NavItem
                                key={item.path}
                                to={item.path}
                            >
                                {item.label}
                            </NavItem>
                        ))
                    }
                </nav>
            </aside>
        </>
    );
}