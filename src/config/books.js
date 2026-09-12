// Book data. Add new entries here to add new books to the site —
// no markup changes required.
//
// status accepts: 'coming-soon' | 'read' | 'buy-amazon' | 'paperback' | 'ebook'

export const STATUS_LABELS = {
  'coming-soon': 'Coming soon',
  read: 'Read',
  'buy-amazon': 'Buy on Amazon',
  paperback: 'Paperback',
  ebook: 'Ebook',
};

export const books = [
  {
    id: 'snow-melts-on-my-boots',
    title: 'Snow Melts on My Boots',
    author: 'Åsmund Kværnstrøm',
    category: 'Short story',
    status: 'coming-soon',
    cover: '/Snow melts cover.png',
    coverAlt: 'Cover of Snow Melts on My Boots by Åsmund Kværnstrøm',
    cta: {
      label: 'Read an advance copy →',
      // Placeholder link — replace with the real advance-copy URL.
      url: '#',
    },
  },
];
