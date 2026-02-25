import { audiobooks } from '../../data/audiobooks';

export default function AudiobookSection() {
  return (
    <section className="mb-8">
      <h2 className="text-white font-bold text-lg mb-4">
        Аудіо<span className="text-[#1CA2EA]">книги</span>
      </h2>
      <div className="bg-[#0a1929] border border-[#1a3050] rounded-xl overflow-hidden">
        {audiobooks.map((book, i) => (
          <div
            key={book.id}
            className={`flex gap-4 p-4 hover:bg-white/5 cursor-pointer transition-colors ${
              i > 0 ? 'border-t border-[#1a3050]' : ''
            }`}
          >
            <img
              src={book.coverUrl}
              alt={book.title}
              className="w-24 h-24 rounded-lg object-cover flex-shrink-0"
            />
            <div className="flex-1 min-w-0">
              <p className="text-white text-sm font-semibold mb-0.5 truncate">{book.title}</p>
              <p className="text-white/50 text-xs mb-1.5">{book.author}</p>
              <span className="inline-block bg-[#1CA2EA]/15 text-[#1CA2EA] text-[10px] font-semibold px-2 py-0.5 rounded-full mb-2">
                {book.genre}
              </span>
              <p className="text-white/30 text-xs line-clamp-2 mb-1.5 leading-relaxed">
                {book.description}
              </p>
              <p className="text-white/20 text-[10px]">
                {book.publishedAt} · {Math.floor(book.duration / 3600)} год{' '}
                {Math.floor((book.duration % 3600) / 60)} хв
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
