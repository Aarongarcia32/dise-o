import { useState } from 'react';
import { User, Mail, Lock } from 'lucide-react';
import logo from 'figma:asset/d200c8ea5ddfa4200eaa40c2d1be331eb3e35ea9.png';

interface LoginFormProps {
  onLogin: (user: any) => void;
}

export function LoginForm({ onLogin }: LoginFormProps) {
  const [isRegistering, setIsRegistering] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    type: 'alumno' as 'alumno' | 'profesor',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        <div className="flex flex-col items-center mb-8">
          <img src={logo} alt="Smart Tube" className="w-20 h-20 mb-4" />
          <h1 className="text-3xl mb-2">Smart Tube</h1>
          <p className="text-gray-500">
            {isRegistering ? 'Crear una cuenta' : 'Iniciar sesión'}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Tipo de usuario - Siempre visible */}
          <div>
            <label className="block text-sm mb-2">Tipo de usuario</label>
            <div className="flex gap-4">
              <label className="flex-1 flex items-center justify-center gap-2 p-3 border-2 border-gray-300 rounded-lg cursor-pointer transition-colors hover:border-blue-500 has-[:checked]:border-blue-500 has-[:checked]:bg-blue-50">
                <input
                  type="radio"
                  name="type"
                  value="alumno"
                  checked={formData.type === 'alumno'}
                  onChange={(e) =>
                    setFormData({ ...formData, type: 'alumno' })
                  }
                  className="sr-only"
                />
                <span>👨‍🎓 Alumno</span>
              </label>
              <label className="flex-1 flex items-center justify-center gap-2 p-3 border-2 border-gray-300 rounded-lg cursor-pointer transition-colors hover:border-blue-500 has-[:checked]:border-blue-500 has-[:checked]:bg-blue-50">
                <input
                  type="radio"
                  name="type"
                  value="profesor"
                  checked={formData.type === 'profesor'}
                  onChange={(e) =>
                    setFormData({ ...formData, type: 'profesor' })
                  }
                  className="sr-only"
                />
                <span>👨‍🏫 Profesor</span>
              </label>
            </div>
          </div>

          {isRegistering && (
            <div>
              <label className="block text-sm mb-2">Nombre completo</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Ingresa tu nombre"
                  required={isRegistering}
                />
              </div>
            </div>
          )}

          <div>
            <label className="block text-sm mb-2">Correo electrónico</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="correo@ejemplo.com"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm mb-2">Contraseña</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="password"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="••••••••"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all"
          >
            {isRegistering ? 'Registrarse' : 'Iniciar sesión'}
          </button>
        </form>

        <div className="mt-6 text-center">
          <button
            onClick={() => setIsRegistering(!isRegistering)}
            className="text-blue-500 hover:text-blue-600"
          >
            {isRegistering
              ? '¿Ya tienes cuenta? Inicia sesión'
              : '¿No tienes cuenta? Regístrate'}
          </button>
        </div>
      </div>
    </div>
  );
}
