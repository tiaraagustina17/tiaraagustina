const startBtn = document.getElementById('startBtn');
const overlay = document.querySelector('.overlay');
const slidesContainer = document.querySelector('.slides');
const slides = document.querySelectorAll('.slide');
const music = document.getElementById('bgMusic');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const replayBtn = document.getElementById('replayBtn');
const musicBtn = document.getElementById('musicBtn');

let current = 0;

startBtn.addEventListener('click', () => {
  overlay.style.display = 'none';
  slidesContainer.classList.remove('hidden');
  showSlide(0);
});

function showSlide(index) {
  slides.forEach((s, i) => {
    s.classList.remove('active', 'exit-left');
    if (i === index) {
      s.classList.add('active');
    } else if (i < index) {
      s.classList.add('exit-left');
    }
  });
  current = index;
}

nextBtn.addEventListener('click', () => {
  if (current < slides.length - 1) {
    showSlide(current + 1);
  }
});

prevBtn.addEventListener('click', () => {
  if (current > 0) {
    showSlide(current - 1);
  }
});

replayBtn.addEventListener('click', () => {
  showSlide(0);
});

musicBtn.addEventListener('click', () => {
  if (music.paused) {
    music.play();
    musicBtn.textContent = "⏸️ Pause Music";
  } else {
    music.pause();
    musicBtn.textContent = "🎵 Play Music";
  }
});
