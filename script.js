

function validateAndRedirect() {
  const username = document.getElementById('ierakstit-vardu').value;
  const password = document.getElementById('ierakstit-paroli').value;
  const password2 = document.getElementById('ierakstit-paroli2').value;

  if (username && password && password2) {
    window.location.href = 'index.html';
  }