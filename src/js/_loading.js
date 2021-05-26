export const loading = () => {
  window.addEventListener('load', () => {
    setTimeout(() => {
      document.getElementById('js-loading').classList.add('is-disabled');
    }, 600);
  });
}