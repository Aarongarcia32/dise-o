import { ImageWithFallback } from './figma/ImageWithFallback';
import { Clock, Trash2, Play } from 'lucide-react';

interface HistoryViewProps {
  history: Array<{
    id: string;
    title: string;
    thumbnail: string;
    teacher: string;
    teacherAvatar: string;
    watchedDate: string;
    watchedPercentage: number;
    duration: string;
    category: string;
  }>;
  onVideoClick: (videoId: string) => void;
  onRemoveFromHistory: (videoId: string) => void;
}

export function HistoryView({ history, onVideoClick, onRemoveFromHistory }: HistoryViewProps) {
  if (history.length === 0) {
    return (
      <div className="p-6">
        <div className="mb-8">
          <h1 className="text-3xl mb-2">Historial</h1>
          <p className="text-gray-600">Videos que has visto recientemente</p>
        </div>
        <div className="flex flex-col items-center justify-center py-20 text-gray-400">
          <Clock className="w-24 h-24 mb-4" />
          <p className="text-xl">No hay videos en tu historial</p>
          <p className="text-sm mt-2">Los videos que veas aparecerán aquí</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl mb-2">Historial</h1>
          <p className="text-gray-600">Videos que has visto recientemente</p>
        </div>
        <button className="text-red-600 hover:text-red-700 flex items-center gap-2">
          <Trash2 className="w-5 h-5" />
          Limpiar historial
        </button>
      </div>

      <div className="space-y-4">
        {history.map((video) => (
          <div
            key={video.id}
            className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all group"
          >
            <div className="flex gap-4 p-4">
              <div
                onClick={() => onVideoClick(video.id)}
                className="relative w-64 flex-shrink-0 aspect-video bg-gray-200 rounded-lg overflow-hidden cursor-pointer"
              >
                <ImageWithFallback
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <Play className="w-10 h-10 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="absolute bottom-2 right-2 bg-black bg-opacity-80 text-white text-xs px-2 py-1 rounded">
                  {video.duration}
                </div>
                {/* Progress bar */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-700 bg-opacity-50">
                  <div
                    className="h-full bg-red-600"
                    style={{ width: `${video.watchedPercentage}%` }}
                  />
                </div>
              </div>

              <div className="flex-1 flex flex-col justify-between min-w-0">
                <div>
                  <h3
                    onClick={() => onVideoClick(video.id)}
                    className="text-lg mb-2 line-clamp-2 cursor-pointer hover:text-blue-600 transition-colors"
                  >
                    {video.title}
                  </h3>
                  <div className="flex items-center gap-3 mb-2">
                    <ImageWithFallback
                      src={video.teacherAvatar}
                      alt={video.teacher}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <p className="text-sm text-gray-600">{video.teacher}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="inline-block text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                      {video.category}
                    </span>
                    <span className="text-sm text-gray-500">
                      Visto el {video.watchedDate}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between mt-4">
                  <div className="text-sm text-gray-500">
                    Progreso: {video.watchedPercentage}%
                  </div>
                  <button
                    onClick={() => onRemoveFromHistory(video.id)}
                    className="flex items-center gap-2 text-red-600 hover:text-red-700 text-sm"
                  >
                    <Trash2 className="w-4 h-4" />
                    Eliminar
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
