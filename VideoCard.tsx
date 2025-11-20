import { ImageWithFallback } from './figma/ImageWithFallback';
import { Play, Clock, Eye } from 'lucide-react';

interface VideoCardProps {
  video: {
    id: string;
    title: string;
    thumbnail: string;
    teacher: string;
    teacherAvatar: string;
    views: string;
    duration: string;
    uploadDate: string;
    category: string;
  };
  onVideoClick: (videoId: string) => void;
}

export function VideoCard({ video, onVideoClick }: VideoCardProps) {
  return (
    <div
      onClick={() => onVideoClick(video.id)}
      className="cursor-pointer group"
    >
      <div className="relative aspect-video bg-gray-200 rounded-xl overflow-hidden mb-3">
        <ImageWithFallback
          src={video.thumbnail}
          alt={video.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
          <Play className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
        <div className="absolute bottom-2 right-2 bg-black bg-opacity-80 text-white text-xs px-2 py-1 rounded">
          {video.duration}
        </div>
      </div>

      <div className="flex gap-3">
        <div className="flex-shrink-0">
          <ImageWithFallback
            src={video.teacherAvatar}
            alt={video.teacher}
            className="w-10 h-10 rounded-full object-cover"
          />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="line-clamp-2 mb-1 group-hover:text-blue-600 transition-colors">
            {video.title}
          </h3>
          <p className="text-sm text-gray-600">{video.teacher}</p>
          <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
            <span className="flex items-center gap-1">
              <Eye className="w-4 h-4" />
              {video.views}
            </span>
            <span>•</span>
            <span>{video.uploadDate}</span>
          </div>
          <div className="mt-1">
            <span className="inline-block text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
              {video.category}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
