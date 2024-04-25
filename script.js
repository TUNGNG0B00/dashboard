const sidebar = document.querySelector('.sidebar');
const btn = document.getElementById('sidebar-toggle');

btn.addEventListener('click', () => {
    sidebar.classList.toggle('hide');
  });
