const cursor = document.getElementById('cursor');

cursor.addEventListener('mousemove', handleMouseMove);

function handleMouseMove(event) {
  const x = event.clientX;
  const y = event.clientY;

  cursor.style.backgroundPositionX = x + 'px';
  cursor.style.backgroundPositionY = y + 'px';
}
