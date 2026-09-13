import { books, STATUS_LABELS } from './config/books.js';

// Builds a single <li> book card from a book data entry.
function renderBookCard(book) {
  const li = document.createElement('li');
  li.className = 'book-card';

  const statusLabel = STATUS_LABELS[book.status] ?? book.status;
  const cta = book.cta;
  const ctaHref = cta.mailerliteFormId ? 'javascript:void(0)' : cta.url;
  const ctaClass = cta.mailerliteFormId ? 'button ml-onclick-form' : 'button';
  const ctaOnclick = cta.mailerliteFormId
    ? ` onclick="ml('show', '${cta.mailerliteFormId}', true)"`
    : '';

  li.innerHTML = `
    <div class="book-card__cover">
      <img
        src="${book.cover}"
        alt="${book.coverAlt}"
        width="480"
        height="720"
      />
    </div>
    <div class="book-card__content">
      <p class="book-card__category">${book.category}</p>
      <h3 class="book-card__title">${book.title}</h3>
      <p class="book-card__author">${book.author}</p>
      <p class="book-card__status">${statusLabel}</p>
      <a class="${ctaClass}" href="${ctaHref}"${ctaOnclick}>
        ${cta.label}
      </a>
    </div>
  `;

  return li;
}

export function renderBooks() {
  const list = document.getElementById('book-list');
  if (!list) return;

  const fragment = document.createDocumentFragment();
  for (const book of books) {
    fragment.appendChild(renderBookCard(book));
  }
  list.appendChild(fragment);
}
