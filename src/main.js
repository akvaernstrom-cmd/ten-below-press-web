import { renderBooks } from './render-books.js';

renderBooks();

document.getElementById('year').textContent = String(new Date().getFullYear());
