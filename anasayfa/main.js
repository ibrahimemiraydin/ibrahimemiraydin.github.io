let currentProject = 0;

function createProjectHTML(project) {
    return `
        <div class="project ${project.isReversed ? 'reversed' : ''}">
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}">
            </div>
            <div class="project-content">
                <h2>${project.title}</h2>
                <p>${project.description}</p>
                <div class="buttons">
                    <button class="btn primary">Learn More</button>
                    <button class="btn secondary">View Details</button>
                </div>
            </div>
        </div>
    `;
}

function updateProject() {
    const container = document.getElementById('projectContainer');
    container.innerHTML = createProjectHTML(projects[currentProject]);
    
    updateDots();
    
    // Add fade-in animation
    const project = container.querySelector('.project');
    project.style.opacity = 0;
    setTimeout(() => {
        project.style.opacity = 1;
    }, 50);
}

function createDots() {
    const dotsContainer = document.getElementById('dotsContainer');
    projects.forEach((_, index) => {
        const dot = document.createElement('span');
        dot.className = 'dot';
        dot.addEventListener('click', () => {
            currentProject = index;
            updateProject();
        });
        dotsContainer.appendChild(dot);
    });
}

function updateDots() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentProject);
    });
}

function nextProject() {
    currentProject = (currentProject + 1) % projects.length;
    updateProject();
}

function previousProject() {
    currentProject = (currentProject - 1 + projects.length) % projects.length;
    updateProject();
}

// Initialize
document.querySelector('.next').addEventListener('click', nextProject);
document.querySelector('.prev').addEventListener('click', previousProject);
createDots();
updateProject();