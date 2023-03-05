const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const jawaban = document.querySelector('#jawaban').value;
  const message = encodeURIComponent(jawaban);
  const url = `https://wa.me/6287877082802?text=${message}`;
  window.location.href = url;
});
