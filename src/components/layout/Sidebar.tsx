import { Link, useRouterState } from '@tanstack/react-router';
import { Home, Library, Heart, ListPlus, AlignJustify, RefreshCw, Clock } from 'lucide-react';
import { artists } from '../../data/artists';
import { usePlayerStore } from '../../store/playerStore';

export default function Sidebar() {
  const { location } = useRouterState();
  const pathname = location.pathname;
  const queue = usePlayerStore((s) => s.queue);

  const playlistItems = artists.slice(0, 5);

  return (
    <aside className="sticky top-16 h-[calc(100vh-4rem)] w-64 bg-[#060d19] border-r border-[#1a3050] overflow-y-auto flex flex-col flex-shrink-0">

      {/* Меню */}
      <div className="px-5 pt-6 pb-5">
        <h2 className="text-white text-xl font-bold mb-4">Меню</h2>

        <Link
          to="/"
          className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
            pathname === '/'
              ? 'bg-[#0d2a4a] text-white'
              : 'text-white/70 hover:text-white hover:bg-white/5'
          }`}
        >
          <Home size={18} />
          Головна
        </Link>

        <Link
          to="/library"
          className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors mt-1 ${
            pathname.startsWith('/library')
              ? 'bg-[#0d2a4a] text-white'
              : 'text-white/70 hover:text-white hover:bg-white/5'
          }`}
        >
          <Library size={18} />
          Моя медіатека
        </Link>
      </div>

      <div className="h-px bg-[#1a3050] mx-5" />

      {/* Плейлисти */}
      <div className="px-5 pt-6 pb-4">
        <h2 className="text-white text-xl font-bold mb-4">Плейлисти</h2>

        <button className="flex items-center gap-3 px-3 py-2.5 w-full rounded-xl text-sm font-medium text-white/70 hover:text-white hover:bg-white/5 transition-colors">
          <Heart size={18} />
          Улюблені треки
        </button>

        <button className="flex items-center gap-3 px-3 py-2.5 w-full rounded-xl text-sm font-medium text-white/70 hover:text-white hover:bg-white/5 transition-colors mt-1">
          <ListPlus size={18} />
          Створити плейлист
        </button>

        {/* Ваші плейлисти header */}
        <div className="flex items-center justify-between px-3 mt-5 mb-1">
          <span className="text-white text-sm font-semibold">Ваші плейлисти</span>
          <AlignJustify size={15} className="text-white/50" />
        </div>

        {/* Playlist items */}
        {playlistItems.map((artist, i) => (
          <div
            key={artist.id}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-xl cursor-pointer transition-colors ${
              i === 0 ? 'bg-[#0d2a4a]' : 'hover:bg-white/5'
            }`}
          >
            <img
              src={artist.image}
              alt={artist.name}
              className="w-10 h-10 rounded-full object-cover flex-shrink-0"
            />
            <div className="min-w-0">
              <p className="text-white text-sm font-medium truncate">{artist.name}</p>
              <p className="text-white/40 text-xs">Виконавець</p>
            </div>
          </div>
        ))}
      </div>

      <div className="h-px bg-[#1a3050] mx-5" />

      {/* Нещодавно прослухані */}
      <div className="px-5 pt-5 pb-6">
        <div className="flex items-center justify-between mb-4">
          <span className="text-white text-sm font-semibold">Нещодавно прослухані</span>
          <RefreshCw size={15} className="text-white/50" />
        </div>

        {queue.length > 0 ? (
          queue.slice(0, 3).map((track) => (
            <div
              key={track.id}
              className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white/5 cursor-pointer transition-colors"
            >
              <img
                src={track.albumCover}
                alt={track.title}
                className="w-10 h-10 rounded-full object-cover flex-shrink-0"
              />
              <div className="min-w-0">
                <p className="text-white text-sm font-medium truncate">{track.title}</p>
                <p className="text-white/40 text-xs truncate">{track.artistName}</p>
              </div>
            </div>
          ))
        ) : (
          <div className="flex justify-center mt-4">
            <div className="w-20 h-20 rounded-full border-2 border-[#1a3050] flex items-center justify-center">
              <Clock size={100} className="text-white/20" />
            </div>
          </div>
        )}
      </div>
    </aside>
  );
}
