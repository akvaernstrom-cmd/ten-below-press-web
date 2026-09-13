import { renderBooks } from './render-books.js';

// Retries ml('show', ...) briefly in case MailerLite is still initializing
// this specific popup (avoids requiring the user to click more than once).
const ML_RETRY_DELAY_MS = 400;
const ML_MAX_ATTEMPTS = 5;

window.showMlPopup = function showMlPopup(formId, attempt = 0) {
  if (typeof window.ml !== 'function') {
    if (attempt < ML_MAX_ATTEMPTS) {
      setTimeout(() => window.showMlPopup(formId, attempt + 1), ML_RETRY_DELAY_MS);
    }
    return;
  }

  window.ml('show', formId, true);

  if (attempt < ML_MAX_ATTEMPTS) {
    setTimeout(() => {
      const iframe = document.querySelector(`iframe[src*="${formId}"]`);
      const visible = iframe && iframe.style.display !== 'none';
      if (!visible) window.showMlPopup(formId, attempt + 1);
    }, ML_RETRY_DELAY_MS);
  }
};

renderBooks();

document.getElementById('year').textContent = String(new Date().getFullYear());
