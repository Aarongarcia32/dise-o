import { BookOpen, Users, Video, TrendingUp } from 'lucide-react';

const subjects = [
  {
    id: 1,
    name: 'Matemáticas',
    icon: '📐',
    color: 'from-blue-500 to-blue-600',
    teachers: 12,
    videos: 245,
    students: 1520,
    description: 'Álgebra, geometría, cálculo y más',
  },
  {
    id: 2,
    name: 'Ciencias',
    icon: '🔬',
    color: 'from-green-500 to-green-600',
    teachers: 10,
    videos: 198,
    students: 1340,
    description: 'Física, química y biología',
  },
  {
    id: 3,
    name: 'Historia',
    icon: '📚',
    color: 'from-amber-500 to-amber-600',
    teachers: 8,
    videos: 156,
    students: 980,
    description: 'Historia universal y local',
  },
  {
    id: 4,
    name: 'Lengua y Literatura',
    icon: '✍️',
    color: 'from-purple-500 to-purple-600',
    teachers: 9,
    videos: 187,
    students: 1120,
    description: 'Gramática, redacción y literatura',
  },
  {
    id: 5,
    name: 'Inglés',
    icon: '🗣️',
    color: 'from-red-500 to-red-600',
    teachers: 15,
    videos: 312,
    students: 1890,
    description: 'Conversación, gramática y vocabulario',
  },
  {
    id: 6,
    name: 'Programación',
    icon: '💻',
    color: 'from-indigo-500 to-indigo-600',
    teachers: 11,
    videos: 278,
    students: 1650,
    description: 'Python, JavaScript, Java y más',
  },
  {
    id: 7,
    name: 'Arte',
    icon: '🎨',
    color: 'from-pink-500 to-pink-600',
    teachers: 6,
    videos: 134,
    students: 780,
    description: 'Dibujo, pintura y diseño',
  },
  {
    id: 8,
    name: 'Música',
    icon: '🎵',
    color: 'from-cyan-500 to-cyan-600',
    teachers: 7,
    videos: 145,
    students: 890,
    description: 'Teoría musical e instrumentos',
  },
];

export function SubjectsView() {
  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-3xl mb-2">Materias</h1>
        <p className="text-gray-600">Explora todas las materias disponibles</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {subjects.map((subject) => (
          <div
            key={subject.id}
            className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all cursor-pointer group"
          >
            <div
              className={`h-32 bg-gradient-to-br ${subject.color} flex items-center justify-center text-6xl group-hover:scale-105 transition-transform`}
            >
              {subject.icon}
            </div>
            <div className="p-5">
              <h3 className="text-xl mb-2">{subject.name}</h3>
              <p className="text-sm text-gray-600 mb-4">{subject.description}</p>
              
              <div className="grid grid-cols-3 gap-3 pt-4 border-t border-gray-100">
                <div className="text-center">
                  <div className="flex items-center justify-center mb-1">
                    <Users className="w-4 h-4 text-gray-500" />
                  </div>
                  <p className="text-xs text-gray-500">Profesores</p>
                  <p>{subject.teachers}</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-1">
                    <Video className="w-4 h-4 text-gray-500" />
                  </div>
                  <p className="text-xs text-gray-500">Videos</p>
                  <p>{subject.videos}</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-1">
                    <TrendingUp className="w-4 h-4 text-gray-500" />
                  </div>
                  <p className="text-xs text-gray-500">Alumnos</p>
                  <p>{subject.students}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
