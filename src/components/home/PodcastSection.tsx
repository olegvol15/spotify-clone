import { podcasts } from '../../data/podcasts';

export default function PodcastSection() {
  return (
    <section className="mb-10">
      <h2 className="text-white font-bold text-lg mb-5">
        Нові релізи <span className="text-[#1CA2EA]">подкастів</span>
      </h2>

      <div className="grid grid-cols-3 gap-5">
        {podcasts.map((podcast) => (
          <div
            key={podcast.id}
            className="bg-[#0a1929] rounded-xl overflow-hidden cursor-pointer hover:bg-[#0d2036] transition-colors"
          >
            {/* Top meta */}
            <div className="px-4 pt-4 pb-3">
              <p className="text-white text-sm font-semibold line-clamp-1">{podcast.title}</p>
              <p className="text-white/40 text-xs mt-0.5">
                {podcast.podcastName} <span className="text-white/20">·</span>
              </p>
            </div>

            {/* Image */}
            <img
              src={podcast.coverUrl}
              alt={podcast.title}
              className="w-full aspect-square object-cover"
            />

            {/* Bottom meta */}
            <div className="px-4 py-3">
              <p className="text-white/40 text-xs leading-relaxed line-clamp-3">
                {podcast.publishedAt} · {Math.floor(podcast.duration / 60)} хв.{' '}
                · {podcast.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
