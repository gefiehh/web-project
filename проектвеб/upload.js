// upload.js
document.getElementById('uploadBtn').onclick = function() {
  document.getElementById('fileInput').click();
};

document.getElementById('fileInput').onchange = function(event) {
  const files = event.target.files;
  if (!files.length) return;
  const diplomas = document.getElementById('diplomas');
  for (let i = 0; i < files.length; i++) {
    if (diplomas.children.length >= 8) break; // ограничение по количеству
    const file = files[i];
    const div = document.createElement('div');
    div.className = 'diploma';
    if (file.type.startsWith('image/')) {
      const img = document.createElement('img');
      img.style.maxWidth = '90px';
      img.style.maxHeight = '110px';
      img.src = URL.createObjectURL(file);
      div.appendChild(img);
    } else if (file.type === 'application/pdf') {
      div.textContent = 'PDF';
    } else {
      div.textContent = 'Файл';
    }
    diplomas.appendChild(div);
  }
  event.target.value = '';
};