import { Search, Bell, User, Menu } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import logo from 'figma:asset/d200c8ea5ddfa4200eaa40c2d1be331eb3e35ea9.png';

interface HeaderProps {
  onMenuClick: () => void;
  currentUser: any;
  onLogout: () => void;
}

export function Header({ onMenuClick, currentUser, onLogout }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-4">
          <button
            onClick={onMenuClick}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <Menu className="w-6 h-6" />
          </button>
          <div className="flex items-center gap-3">
            <img src={logo} alt="Smart Tube" className="w-10 h-10" />
            <span className="text-xl">Smart Tube</span>
          </div>
        </div>

        <div className="flex-1 max-w-2xl mx-8">
          <div className="flex items-center bg-gray-100 rounded-full px-4 py-2">
            <input
              type="text"
              placeholder="Buscar videos..."
              className="flex-1 bg-transparent outline-none"
            />
            <Search className="w-5 h-5 text-gray-500" />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <Bell className="w-6 h-6" />
          </button>
          <div className="relative group">
            <button className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-full transition-colors">
              <User className="w-6 h-6" />
              {currentUser && (
                <span className="text-sm">{currentUser.name}</span>
              )}
            </button>
            {currentUser && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 hidden group-hover:block">
                <div className="p-4 border-b border-gray-200">
                  <p>{currentUser.name}</p>
                  <p className="text-sm text-gray-500">{currentUser.email}</p>
                  <p className="text-xs text-gray-400 mt-1 capitalize">{currentUser.type}</p>
                </div>
                <button
                  onClick={onLogout}
                  className="w-full text-left px-4 py-2 hover:bg-gray-100 text-red-600"
                >
                  Cerrar sesión
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
