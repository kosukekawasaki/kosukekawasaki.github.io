const darkmode = new Darkmode();
toggleIcon();

function toggleIcon() {
  if (darkmode.isActivated()) {
    document.getElementById("dark-toggle-link").innerText = "🌕";
  }
  else {
    document.getElementById("dark-toggle-link").innerText = "🌑";
  }
}

function toggleDarkMode() {
  darkmode.toggle();
  toggleIcon();
}