const navDialog = document.getElementById('nav-dialog');
const mainContent = document.getElementById('main-content');

function handleMenu() {
  navDialog.classList.toggle('hidden');
  mainContent.classList.toggle('opacity-20');
}

window.onload = function() {
  if (!navDialog.classList.contains('hidden')) {
    navDialog.classList.add('hidden');
  }
}