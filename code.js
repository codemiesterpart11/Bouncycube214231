javascript:void(function() {
  // Create a new script element
  const script = document.createElement('script');
  script.textContent = `
    const cube = document.createElement('div');
    cube.style.width = '20px';
    cube.style.height = '20px';
    cube.style.backgroundColor = 'blue';
    cube.style.position = 'absolute';
    cube.style.top = '50%';
    cube.style.left = '50%';
    cube.style.transform = 'translate(-50%,-50%)';
    document.body.appendChild(cube);

    let x = 0, y = 0, dx = 0, dy = 0, gravity = 0.2, bounceFactor = 0.5;

    function update() {
      dy += gravity;
      y += dy;
      x += dx;

      // Check for collisions with the ground
      if (y + 20 >= window.innerHeight) {
        y = window.innerHeight - 20;
        dy = -dy * bounceFactor; // Adjust bounce factor
      }

      cube.style.top = y + 'px';
      cube.style.left = x + 'px';

      requestAnimationFrame(update);
    }

    update();

    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') {
        dx -= 2;
      } else if (e.key === 'ArrowRight') {
        dx += 2;
      } else if (e.key === 'ArrowUp') {
        dy = -5;
      }
    });
  `;

  // Append the script to the head of the document
  document.head.appendChild(script);
})();
