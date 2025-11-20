import { VideoCard } from './VideoCard';

interface HomeViewProps {
  videos: Array<{
    id: string;
    title: string;
    thumbnail: string;
    teacher: string;
    teacherAvatar: string;
    views: string;
    duration: string;
    uploadDate: string;
    category: string;
  }>;
  onVideoClick: (videoId: string) => void;
}

export function HomeView({ videos, onVideoClick }: HomeViewProps) {
  const categories = [
    'Todo',
    'Matemáticas',
    'Ciencias',
    'Historia',
    'Programación',
    'Inglés',
    'Arte',
    'Música',
  ];

  return (
    <div className="p-6">
      {/* Category pills */}
      <div className="flex gap-3 mb-6 overflow-x-auto pb-2">
        {categories.map((category, index) => (
          <button
            key={category}
            className={`px-4 py-2 rounded-lg whitespace-nowrap transition-colors ${
              index === 0
                ? 'bg-gray-900 text-white'
                : 'bg-gray-100 hover:bg-gray-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Video Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {videos.map((video) => (
          <VideoCard key={video.id} video={video} onVideoClick={onVideoClick} />
        ))}
      </div>
    </div>
  );
}
