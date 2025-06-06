// login.js
const loginBtn = document.getElementById('loginBtn');
const loginModal = document.getElementById('loginModal');
const closeModal = document.getElementById('closeModal');

loginBtn.onclick = function() {
  loginModal.style.display = 'flex';
};

closeModal.onclick = function() {
  loginModal.style.display = 'none';
};

window.onclick = function(event) {
  if (event.target === loginModal) {
    loginModal.style.display = 'none';
  }
};