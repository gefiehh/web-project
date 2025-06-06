// delete.js
document.getElementById('deleteBtn').onclick = function() {
  const diplomas = document.getElementById('diplomas');
  if (diplomas.children.length > 0) {
    diplomas.removeChild(diplomas.lastElementChild);
  }
};