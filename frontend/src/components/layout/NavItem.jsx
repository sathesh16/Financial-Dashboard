import { NavLink } from "react-router-dom";

export default function NavItem({ to, children }) {
    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                `block px-4 py-2 transition
        ${isActive
                    ? "bg-blue-600 text-white"
                    : "text-slate-300 hover:bg-slate-800"
                }`
            }
        >
            {children}
        </NavLink>
    );
}