import { useState } from 'react';
import { Sun, Droplets, Heart, Zap, Music2, ChevronDown } from 'lucide-react';

const moods = [
  { id: 'happy', icon: Sun, label: 'Хепні' },
  { id: 'melancholy', icon: Droplets, label: 'Меланхолія' },
  { id: 'romance', icon: Heart, label: 'Романтика' },
  { id: 'drive', icon: Zap, label: 'Драйв' },
  { id: 'party', icon: Music2, label: 'Туса' },
];

export default function MoodSection() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section className="mb-8">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-white font-bold text-lg">
          Саундреки на основі твого{' '}
          <span className="text-[#1CA2EA]">настрою</span>
        </h2>
        <button className="flex items-center gap-1.5 text-white/50 text-sm border border-[#1a3050] rounded-full px-3 py-1 hover:border-[#1CA2EA]/60 hover:text-white/80 transition-colors">
          Настрій
          <ChevronDown size={13} />
        </button>
      </div>

      <div className="flex gap-5 overflow-x-auto pb-1 scrollbar-none">
        {moods.map(({ id, icon: Icon, label }) => {
          const isActive = active === id;
          return (
            <button
              key={id}
              onClick={() => setActive(isActive ? null : id)}
              className="flex flex-col items-center gap-2 flex-shrink-0"
            >
              <div
                className={`w-20 h-20 rounded-full border-2 flex items-center justify-center transition-all ${
                  isActive
                    ? 'border-[#1CA2EA] bg-[#1CA2EA]/10 shadow-[0_0_14px_rgba(28,162,234,0.35)]'
                    : 'border-[#1a3050] hover:border-[#1CA2EA]/50 hover:bg-white/5'
                }`}
              >
                <Icon
                  size={28}
                  className={`transition-colors ${isActive ? 'text-[#1CA2EA]' : 'text-white/50'}`}
                />
              </div>
              <span
                className={`text-xs font-medium transition-colors ${
                  isActive ? 'text-[#1CA2EA]' : 'text-white/50'
                }`}
              >
                {label}
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
}
