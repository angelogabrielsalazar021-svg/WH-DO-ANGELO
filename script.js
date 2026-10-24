// Interatividade do Site — Ghost Studio
document.addEventListener('DOMContentLoaded', () => {
  let counter = 0;
  const counterEl = document.getElementById('click-counter');
  const demoBtn = document.getElementById('btn-demo');
  const ctaBtn = document.getElementById('btn-cta');

  if (demoBtn && counterEl) {
    demoBtn.addEventListener('click', () => {
      counter++;
      counterEl.textContent = counter;
      demoBtn.textContent = 'Clicado ' + counter + 'x!';
      demoBtn.style.transform = 'scale(0.96)';
      setTimeout(() => { demoBtn.style.transform = 'scale(1)'; }, 150);
    });
  }

  if (ctaBtn) {
    ctaBtn.addEventListener('click', () => {
      alert('Parabéns! Site interativo executando com sucesso no Ghost Director!');
    });
  }
});