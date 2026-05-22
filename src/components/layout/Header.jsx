import menuWhite from '@/assets/menu-white.svg';
import { logout }
    from "../../services/authService";

function handleLogout() {
    logout();
}

export default function Header({ toggleSidebar }) {
    return (
        <header className="h-16 border-b border-slate-800 px-6 flex items-center justify-between">
            <div className="flex items-center gap-4">
                <button
                    onClick={toggleSidebar}
                    className='lg:hidden'
                >
                    <img src={menuWhite} alt="menu" />
                </button>

                <h1 className="font-semibold text-lg">
                    Financial Dashboard
                </h1>
            </div>

            <div className="w-8 h-8 rounded-full bg-blue-600" />
            <button
                onClick={handleLogout}
                className="bg-red-600 px-4 py-2"
            >
                Logout
            </button>
        </header>
    );
}