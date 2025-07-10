const isAndroid = /Android/i.test(navigator.userAgent);

const menuIcon = document.querySelector('.menu-icon');
if (isAndroid && menuIcon) {
  menuIcon.style.display = 'block';
}

function toggleDown() {
  const dropdown = document.getElementById('dropdown');
  dropdown.style.display = dropdown.style.display === 'flex' ? 'none' : 'flex';
}

document.addEventListener('click', function (event) {
  const dropdown = document.getElementById('dropdown');
  const menuIcon = document.querySelector('.menu-icon');

  if (
    dropdown &&
    menuIcon &&
    !dropdown.contains(event.target) &&
    !menuIcon.contains(event.target)
  ) {
    dropdown.style.display = 'none';
  }
});
