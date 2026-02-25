import type { Podcast } from '../types';

export const podcasts: Podcast[] = [
  {
    id: 'pod1',
    title: 'Майбутнє вже тут: як технології змінюють наш світ',
    podcastName: 'Хроніки майбутнього',
    coverUrl: 'https://picsum.photos/seed/podcast1/400/225',
    description: 'Подкаст про технологічний прогрес і його вплив на суспільство.',
    publishedAt: '15 січ 2024',
    duration: 3240,
  },
  {
    id: 'pod2',
    title: 'Розкриваємо таємниці кримінального світу',
    podcastName: 'Тіньові справи',
    coverUrl: 'https://picsum.photos/seed/podcast2/400/225',
    description: 'Реальні кримінальні розслідування та детективні історії.',
    publishedAt: '22 січ 2024',
    duration: 2760,
  },
  {
    id: 'pod3',
    title: 'Чи живемо ми в симуляції? Доводи за і проти',
    podcastName: 'Теорії змови',
    coverUrl: 'https://picsum.photos/seed/podcast3/400/225',
    description: 'Аналіз найпопулярніших теорій змови та наукові спростування.',
    publishedAt: '1 лют 2024',
    duration: 2100,
  },
];
