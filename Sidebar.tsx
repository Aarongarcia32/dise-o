import { Home, Clock, BookOpen, Users, Video, TrendingUp, Library } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  activeView: string;
  onViewChange: (view: string) => void;
}

export function Sidebar({ isOpen, activeView, onViewChange }: SidebarProps) {
  const menuItems = [
    { id: 'home', label: 'Inicio', icon: Home },
    { id: 'trending', label: 'Tendencias', icon: TrendingUp },
    { id: 'subjects', label: 'Materias', icon: BookOpen },
    { id: 'teachers', label: 'Profesores', icon: Users },
    { id: 'history', label: 'Historial', icon: Clock },
    { id: 'library', label: 'Biblioteca', icon: Library },
  ];

  const categories = [
    'Matemáticas',
    'Ciencias',
    'Historia',
    'Lengua y Literatura',
    'Inglés',
    'Física',
    'Química',
    'Biología',
    'Geografía',
    'Arte',
  ];

  return (
    <aside
      className={`fixed left-0 top-16 h-[calc(100vh-4rem)] bg-white border-r border-gray-200 transition-all duration-300 overflow-y-auto ${
        isOpen ? 'w-64' : 'w-20'
      }`}
    >
      <nav className="py-4">
        <div className="space-y-1 px-3">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => onViewChange(item.id)}
                className={`w-full flex items-center gap-4 px-3 py-3 rounded-lg transition-colors ${
                  activeView === item.id
                    ? 'bg-gray-100'
                    : 'hover:bg-gray-50'
                }`}
              >
                <Icon className="w-5 h-5 flex-shrink-0" />
                {isOpen && <span>{item.label}</span>}
              </button>
            );
          })}
        </div>

        {isOpen && (
          <>
            <div className="border-t border-gray-200 my-4" />
            <div className="px-6 mb-3 text-sm text-gray-500">
              Categorías
            </div>
            <div className="space-y-1 px-3">
              {categories.map((category) => (
                <button
                  key={category}
                  className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  {category}
                </button>
              ))}
            </div>
          </>
        )}
      </nav>
    </aside>
  );
}
