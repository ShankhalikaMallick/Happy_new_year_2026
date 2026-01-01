const btn = document.querySelector('#action-btn');
const envelope = document.querySelector('#envelope-box');

btn.addEventListener('click', () => {
  btn.style.display = 'none';

  // Step 1: Make it visible
  envelope.classList.remove('hidden');

  // Step 2: FORCE browser repaint
  envelope.offsetHeight; // 🔑 VERY IMPORTANT

  // Step 3: Trigger bounce pop
  envelope.classList.add('pop');

  // Step 4: Open envelope after pop
  setTimeout(() => {
    envelope.classList.add('open');

    confetti({
      particleCount: 200,
      spread: 100,
      origin: { y: 0.6 },
      colors: ['#d4af37', '#ffffff', '#ffd700']
    });
  }, 600);
});
