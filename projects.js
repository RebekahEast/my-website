const imageRolling = document.getElementByClass("project-image");
const TextRolling = document.getElementByClass("project-text");

imageRolling.addEventListener('mouseover', () => {
  TextRolling.style.display = 'block';
}, false);

imageRolling.addEventListener('mouseleave', () => {
  TextRolling.style.display = 'none';
}, false);
