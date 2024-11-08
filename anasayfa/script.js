// header ve footer dosyalarını yükleme fonksiyonu
async function loadComponent(id, url) {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const content = await response.text();
      document.getElementById(id).innerHTML = content;
      console.log(`Yüklenen içerik: ${url}`);

      // Eğer footer yüklenmişse, yılı güncelle
      if (id === "footer") {
        const yearElement = document.getElementById("currentYear");
        if (yearElement) {
          yearElement.textContent = new Date().getFullYear();
        }
      }
    } else {
      console.error(`Error loading ${url}: ${response.status}`);
    }
  } catch (error) {
    console.error(`Error fetching ${url}:`, error);
  }
}

// DOMContentLoaded eventi ile sayfa yüklendikten sonra header ve footer'ı yükleyin
document.addEventListener("DOMContentLoaded", () => {
  // Sayfa yoluna göre header ve footer dosyalarını yükle
  loadComponent("header", "../header_footer/header.html");
  loadComponent("footer", "../header_footer/footer.html");
});






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
  
