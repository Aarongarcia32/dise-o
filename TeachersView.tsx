import { ImageWithFallback } from './figma/ImageWithFallback';
import { Video, Users, Star, Award } from 'lucide-react';

const teachers = [
  {
    id: 1,
    name: 'Dr. Carlos Mendoza',
    subject: 'Matemáticas',
    avatar: 'https://images.unsplash.com/photo-1700616466971-a4e05aa89e7d?w=400',
    rating: 4.9,
    students: 2340,
    videos: 156,
    description: 'Especialista en álgebra y cálculo con 15 años de experiencia',
    verified: true,
  },
  {
    id: 2,
    name: 'Dra. María González',
    subject: 'Ciencias',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400',
    rating: 4.8,
    students: 1980,
    videos: 134,
    description: 'Química y biología, investigadora científica',
    verified: true,
  },
  {
    id: 3,
    name: 'Prof. Juan Ramírez',
    subject: 'Historia',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
    rating: 4.7,
    students: 1560,
    videos: 98,
    description: 'Historiador especializado en historia contemporánea',
    verified: true,
  },
  {
    id: 4,
    name: 'Lic. Ana Torres',
    subject: 'Lengua y Literatura',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
    rating: 4.9,
    students: 2120,
    videos: 145,
    description: 'Escritora y profesora de literatura latinoamericana',
    verified: true,
  },
  {
    id: 5,
    name: 'Prof. David Smith',
    subject: 'Inglés',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
    rating: 5.0,
    students: 3450,
    videos: 234,
    description: 'Nativo de Estados Unidos, certificado TESOL',
    verified: true,
  },
  {
    id: 6,
    name: 'Ing. Roberto López',
    subject: 'Programación',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400',
    rating: 4.8,
    students: 2890,
    videos: 198,
    description: 'Full Stack Developer con experiencia en startups',
    verified: true,
  },
  {
    id: 7,
    name: 'Mtra. Laura Fernández',
    subject: 'Arte',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400',
    rating: 4.7,
    students: 1230,
    videos: 87,
    description: 'Artista plástica y diseñadora gráfica',
    verified: false,
  },
  {
    id: 8,
    name: 'Prof. Miguel Ángel Soto',
    subject: 'Música',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400',
    rating: 4.9,
    students: 1670,
    videos: 112,
    description: 'Pianista profesional y compositor',
    verified: true,
  },
];

export function TeachersView() {
  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-3xl mb-2">Profesores</h1>
        <p className="text-gray-600">
          Conoce a nuestros educadores expertos
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {teachers.map((teacher) => (
          <div
            key={teacher.id}
            className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all cursor-pointer"
          >
            <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200">
              <ImageWithFallback
                src={teacher.avatar}
                alt={teacher.name}
                className="w-full h-full object-cover"
              />
              {teacher.verified && (
                <div className="absolute top-3 right-3 bg-blue-500 text-white p-1.5 rounded-full">
                  <Award className="w-4 h-4" />
                </div>
              )}
            </div>

            <div className="p-5">
              <div className="flex items-start justify-between mb-2">
                <div className="flex-1">
                  <h3 className="mb-1">{teacher.name}</h3>
                  <p className="text-sm text-blue-600">{teacher.subject}</p>
                </div>
                <div className="flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded-lg">
                  <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  <span className="text-sm">{teacher.rating}</span>
                </div>
              </div>

              <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                {teacher.description}
              </p>

              <div className="grid grid-cols-2 gap-3 pt-4 border-t border-gray-100">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-gray-500" />
                  <div>
                    <p className="text-xs text-gray-500">Estudiantes</p>
                    <p className="text-sm">{teacher.students.toLocaleString()}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Video className="w-4 h-4 text-gray-500" />
                  <div>
                    <p className="text-xs text-gray-500">Videos</p>
                    <p className="text-sm">{teacher.videos}</p>
                  </div>
                </div>
              </div>

              <button className="w-full mt-4 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors">
                Ver perfil
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
