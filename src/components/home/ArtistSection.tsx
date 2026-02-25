import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { Artist } from '../../types';

function formatListeners(count: number): string {
  return count.toLocaleString('uk-UA');
}

interface ArtistSectionProps {
  title: string;
  accentWord: string;
  artists: Artist[];
  onArtistClick?: (artist: Artist) => void;
}

export default function ArtistSection({
  title,
  accentWord,
  artists,
  onArtistClick,
}: ArtistSectionProps) {
  const rowRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 'left' | 'right') => {
    if (!rowRef.current) return;
    rowRef.current.scrollBy({ left: dir === 'right' ? 160 : -160, behavior: 'smooth' });
  };

  const accentIdx = title.indexOf(accentWord);
  const before = accentIdx > -1 ? title.slice(0, accentIdx) : title;
  const after = accentIdx > -1 ? title.slice(accentIdx + accentWord.length) : '';

  return (
    <section className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-white font-bold text-lg">
          {before}
          {accentWord && <span className="text-[#1CA2EA]">{accentWord}</span>}
          {after}
        </h2>
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => scroll('left')}
            className="w-7 h-7 rounded-full border border-[#1a3050] flex items-center justify-center text-white/50 hover:text-white hover:border-[#1CA2EA] transition-colors"
          >
            <ChevronLeft size={13} />
          </button>
          <button
            onClick={() => scroll('right')}
            className="w-7 h-7 rounded-full border border-[#1a3050] flex items-center justify-center text-white/50 hover:text-white hover:border-[#1CA2EA] transition-colors"
          >
            <ChevronRight size={13} />
          </button>
        </div>
      </div>

      <div ref={rowRef} className="flex gap-5 overflow-x-auto pb-2 scrollbar-none">
        {artists.map((artist) => (
          <button
            key={artist.id}
            onClick={() => onArtistClick?.(artist)}
            className="flex-shrink-0 flex flex-col items-center gap-2 w-24 group"
          >
            <img
              src={artist.image}
              alt={artist.name}
              className="w-20 h-20 rounded-full object-cover group-hover:opacity-80 transition-opacity ring-2 ring-transparent group-hover:ring-[#1CA2EA]/40"
            />
            <p className="text-white text-xs font-semibold text-center w-full truncate">
              {artist.name}
            </p>
            <p className="text-white/40 text-[10px] text-center">
              {formatListeners(artist.monthlyListeners)}
            </p>
          </button>
        ))}
      </div>
    </section>
  );
}
