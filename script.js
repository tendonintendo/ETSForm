document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  document.getElementById('nameError').innerText = '';
  document.getElementById('emailError').innerText = '';
  document.getElementById('phoneError').innerText = '';
  document.getElementById('messageError').innerText = '';

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const message = document.getElementById('message').value.trim();

  let isValid = true;

  if (name === '') {
      document.getElementById('nameError').innerText = 'Kolom "Nama" masih kosong.';
      isValid = false;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
      document.getElementById('emailError').innerText = 'Email tidak valid.';
      isValid = false;
  }

  const phonePattern = /^\d{10,13}$/;
  if (!phonePattern.test(phone)) {
      document.getElementById('phoneError').innerText = 'Nomor Telepon tidak valid.';
      isValid = false;
  }

  if (message === '') {
      document.getElementById('messageError').innerText = 'Kolom "Pesan" masih kosong.';
      isValid = false;
  }

  if (isValid) {
      alert('Form diajukan.');
      document.getElementById('contactForm').reset();
  }
});
