const words = ['/Développeuse', '/Curieuse', '/Créative', '/Passionnée'];
const typedText = document.getElementById('typed-text');
const cursor_typewriter = document.querySelector('.cursor');

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentWord = words[wordIndex];
  const displayedText = currentWord.substring(0, charIndex);

  typedText.textContent = '' + displayedText;

  if (!isDeleting && charIndex < currentWord.length) {
    charIndex++;
    setTimeout(typeEffect, 150);
  } else if (isDeleting && charIndex > 0) {
    charIndex--;
    setTimeout(typeEffect, 75);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) {
      wordIndex = (wordIndex + 1) % words.length;
    }
    setTimeout(typeEffect, 1000);
  }
}

window.addEventListener('load', typeEffect);
