document.addEventListener('contextmenu', function (e) {
  e.preventDefault();
});

document.onkeydown = function (e) {
  // Disable F12 key
  if (e.keyCode == 123) {
    return false;
  }

  // Disable Ctrl+Shift+I
  if (e.ctrlKey && e.shiftKey && e.keyCode == 73) {
    return false;
  }

  // Disable Ctrl+Shift+C
  if (e.ctrlKey && e.shiftKey && e.keyCode == 67) {
    return false;
  }

   // Disable Ctrl+Shift+J
   if (e.ctrlKey && e.shiftKey && e.keyCode == 74) {
    return false;
  }

  // Disable Ctrl+U
  if (e.ctrlKey && e.keyCode == 85) {
    return false;
  }
}