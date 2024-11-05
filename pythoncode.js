let codes = [];

fetch('codes.json')
    .then(response => response.json())
    .then(data => {
        codes = data;
        displayInitialContent(); // İlk içerik sayfa yüklendiğinde gösterilir
    });

// Arama kutusuna Enter tuşu ile arama yapma işlevini ekle
document.getElementById('searchInput').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        searchCode();
    }
});

function searchCode() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = ''; // Önceki sonuçları temizle

    // Eşleşen kodları bul ve sonuçları ekle
    codes.forEach(code => {
        if (code.name.toLowerCase().includes(input)) {
            addCodeToResults(code);
        }
    });
}

function goBack() {
    document.getElementById('searchInput').value = ''; // Arama inputunu temizle
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = ''; // Önceki sonuçları temizle
    displayInitialContent(); // İlk içeriği tekrar göster
}

function displayInitialContent() {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = ''; // Mevcut içerikleri temizle
    codes.forEach(code => {
        addCodeToResults(code);
    });
}

function addCodeToResults(code) {
    const resultsDiv = document.getElementById('results');
    const codeElement = document.createElement('div');
    codeElement.className = 'content';

    const codeName = document.createElement('div');
    codeName.className = 'code-name';
    codeName.innerHTML = `<h2>${code.name}</h2>`;

    const codeDescription = document.createElement('div');
    codeDescription.className = 'code-description';
    codeDescription.innerHTML = `<p>${code.description}</p>`;

    codeElement.appendChild(codeName);
    codeElement.appendChild(codeDescription);
    resultsDiv.appendChild(codeElement);
}

// Sayfa yüklendiğinde ilk içeriği göster
window.onload = displayInitialContent;

document.getElementById('anasayfa').addEventListener('click', function() {
    window.location.href = 'https://ibrahimemiraydin.github.io/';
});