const btn = document.querySelector('#action-btn');
const envelope = document.querySelector('#envelope-box');

btn.addEventListener('click', () => {
  btn.style.display = 'none';

  envelope.classList.remove('hidden');
  void envelope.offsetWidth; 
  envelope.classList.add('pop');

  // TRIGGER 1: Gold and White at the 4s mark
  setTimeout(() => {
    envelope.classList.add('open');

    confetti({
      particleCount: 250,
      spread: 100,
      origin: { y: 0.5 },
      zIndex: 9999, 
      colors: ['#d4af37', '#ffffff', '#ffd700'] // Gold, White, Bright Gold
    });
  }, 4000); 

  // TRIGGER 2: Side safety bursts (Now themed Gold and White)
  setTimeout(() => {
    // Left side burst
    confetti({
      particleCount: 150,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      zIndex: 9999,
      colors: ['#d4af37', '#ffffff', '#ffd700'] 
    });
    // Right side burst
    confetti({
      particleCount: 150,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      zIndex: 9999,
      colors: ['#d4af37', '#ffffff', '#ffd700']
    });
  }, 5500);
});
