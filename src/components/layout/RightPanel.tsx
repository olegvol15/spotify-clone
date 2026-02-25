import { MoreHorizontal, X, Upload, PlusCircle } from 'lucide-react';
import { artists } from '../../data/artists';

export default function RightPanel() {
  const mainArtist = artists[5]; // The Weeknd
  const secondArtist = artists[4]; // Taylor Swift

  return (
    <aside className="fixed top-16 right-0 bottom-0 w-60 z-40 bg-[#060d19] border-l border-[#1a3050] overflow-y-auto flex flex-col p-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-white text-sm font-semibold truncate">Radio Hits FM</span>
        <div className="flex items-center gap-0.5">
          <button className="text-white/40 hover:text-white p-1 transition-colors">
            <MoreHorizontal size={15} />
          </button>
          <button className="text-white/40 hover:text-white p-1 transition-colors">
            <X size={15} />
          </button>
        </div>
      </div>

      {/* Large artist image (grayscale) */}
      <img
        src={mainArtist.image}
        alt={mainArtist.name}
        className="w-full aspect-square object-cover rounded-xl grayscale mb-3"
      />

      {/* Track info */}
      <div className="flex items-center justify-between mb-4">
        <div className="min-w-0">
          <p className="text-white text-sm font-semibold truncate">Blinding Lights</p>
          <p className="text-white/40 text-xs truncate">{mainArtist.name}</p>
        </div>
        <div className="flex items-center gap-1 flex-shrink-0">
          <button className="text-white/40 hover:text-white p-1 transition-colors">
            <Upload size={14} />
          </button>
          <button className="text-white/40 hover:text-white p-1 transition-colors">
            <PlusCircle size={14} />
          </button>
        </div>
      </div>

      {/* Second image (smaller) */}
      <img
        src={secondArtist.image}
        alt={secondArtist.name}
        className="w-full h-28 object-cover rounded-xl mb-4"
      />

      {/* Artist info */}
      <p className="text-white text-sm font-semibold mb-0.5">{mainArtist.name}</p>
      <p className="text-white/40 text-xs mb-3">72 780 975 слухачів</p>
      <button className="w-full border border-[#1CA2EA] text-[#1CA2EA] text-xs font-semibold rounded-full py-1.5 mb-4 hover:bg-[#1CA2EA]/10 transition-colors">
        Підписатись
      </button>

      {/* Bio */}
      <p className="text-white/40 text-xs leading-relaxed line-clamp-3">{mainArtist.bio}</p>
    </aside>
  );
}
