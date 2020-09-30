function growingWord() {
  const colors = ['blue', 'green', 'red'];

  const paragraph = document.getElementsByTagName('p')[2];

  const { color } = paragraph.style;
  paragraph.style.color = !color ? 'blue' : colors[(colors.indexOf(color) + 1) % colors.length];

  const fontSize = paragraph.style.fontSize.replace('px', '');
  paragraph.style.fontSize = `${!fontSize ? '2' : fontSize * 2}px`;
}