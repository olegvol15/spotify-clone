import { podcasts } from '../../data/podcasts';

export default function PodcastSection() {
  return (
    <section className="mb-8">
      <h2 className="text-white font-bold text-lg mb-4">
        Популярні <span className="text-[#1CA2EA]">подкасти</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {podcasts.map((podcast) => (
          <div
            key={podcast.id}
            className="bg-[#0a1929] border border-[#1a3050] rounded-xl overflow-hidden hover:border-[#1CA2EA]/40 transition-colors cursor-pointer group"
          >
            <div className="relative overflow-hidden">
              <img
                src={podcast.coverUrl}
                alt={podcast.title}
                className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-3">
              <p className="text-[#1CA2EA] text-xs font-semibold mb-1 truncate">
                {podcast.podcastName}
              </p>
              <p className="text-white text-sm font-semibold mb-2 line-clamp-2 leading-snug">
                {podcast.title}
              </p>
              <p className="text-white/30 text-xs">
                {podcast.publishedAt} · {Math.floor(podcast.duration / 60)} хв
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
