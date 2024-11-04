const projects = [
    {
        title: 'Proje 1',
        description: 'Proje 1 hakkında kısa açıklama.',
        image: 'https://example.com/project1.jpg'
    },
    {
        title: 'Proje 2',
        description: 'Proje 2 hakkında kısa açıklama.',
        image: 'https://example.com/project2.jpg'
    },
    {
        title: 'Proje 3',
        description: 'Proje 3 hakkında kısa açıklama.',
        image: 'https://example.com/project3.jpg'
    }
    // Daha fazla proje ekleyebilirsin
];

function getRandomProject() {
    const randomIndex = Math.floor(Math.random() * projects.length);
    return projects[randomIndex];
}

document.addEventListener('DOMContentLoaded', function() {
    const project = getRandomProject();
    const projectContainer = document.getElementById('project-cards');

    const card = document.createElement('div');
    card.classList.add('project-card');
    card.innerHTML = `
        <h3>${project.title}</h3>
        <img src="${project.image}" alt="${project.title}">
        <p>${project.description}</p>
        <button>Siteye Git</button>
    `;

    projectContainer.appendChild(card);
});
