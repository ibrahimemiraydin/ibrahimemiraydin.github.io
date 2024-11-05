document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Formun varsayılan gönderimini durdurur
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    if (name && email && message) {
      alert("Mesajınız başarıyla gönderildi!");
      document.getElementById('contactForm').reset(); // Formu temizler
    } else {
      alert("Lütfen tüm alanları doldurun.");
    }
  });
  