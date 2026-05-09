const dot = document.querySelector('.cursor-dot');
  const outline = document.querySelector('.cursor-outline');
  const bg = document.querySelector('.cursor-bg');

  let mouseX = 0;
  let mouseY = 0;
  let outlineX = 0;
  let outlineY = 0;

  const lerp = (start, end, factor) => (1 - factor) * start + factor * end;

  function animateCursor() {
    outlineX = lerp(outlineX, mouseX, 0.1);
    outlineY = lerp(outlineY, mouseY, 0.1);

    dot.style.left = `${mouseX}px`;
    dot.style.top = `${mouseY}px`;

    outline.style.left = `${outlineX}px`;
    outline.style.top = `${outlineY}px`;

    bg.style.left = `${mouseX}px`;
    bg.style.top = `${mouseY}px`;

    requestAnimationFrame(animateCursor);
  }

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  document.addEventListener('mousedown', () => {
    bg.style.width = '4vh'; // correspond à la taille du cercle
    bg.style.height = '4vh';
    bg.style.opacity = '0.5';
  });

  document.addEventListener('mouseup', () => {
    bg.style.width = '0px'; // retour à moitié
    bg.style.height = '0px';
    bg.style.opacity = '0.1';
  });

  document.querySelectorAll('a, button').forEach(el => {
    el.addEventListener('mouseenter', () => {
      bg.style.width = '2vh';
      bg.style.height = '2vh';
      bg.style.opacity = '0.5';
    });

    el.addEventListener('mouseleave', () => {
      bg.style.width = '0px';
      bg.style.height = '0px';
      bg.style.opacity = '0';
    });
  });

  animateCursor();