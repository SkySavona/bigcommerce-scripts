document.addEventListener('DOMContentLoaded', function () {
  const editCartLink = document.querySelector('a.cart-header-link#cart-edit-link');
  if (editCartLink) {
    editCartLink.setAttribute('href', 'https://berzempic.co/');
  }
});
