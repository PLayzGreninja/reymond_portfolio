// Project data - can be easily updated
const projects = [
    {
        title: "Presentation Viewer",
        description: "A full-stack application for viewing and navigating presentations, built with Express, EJS, and Vue.js for a seamless user experience.",
        course: "Database Programmer",
        github: "https://github.com/PLayzGreninja/presentation-viewer.git"
    },
    {
        title: "Product Management System",
        description: "A web application for managing products, inventory, and categories, built with PHP and MySQL.",
        course: "Computer Programmer",
        github: "https://github.com/PLayzGreninja/Product-Management-System.git"
    },
    {
        title: "Cafe Management App",
        description: "A desktop application for managing cafe orders and inventory, built with C# and WinForms.",
        course: "Computer Programmer Assistant",
        github: "https://github.com/PLayzGreninja/CafeManagement.git"
    },
    {
        title: "Task Management App",
        description: "A task management application for Computer Programmer Assistant, built with React and local storage, featuring drag-and-drop functionality.",
        course: "Computer Programmer Assistant",
        github: "https://github.com/PLayzGreninja/Task_Managerv2.1.git"
    },
    {
        title: "A Simple Recipe from the Heart",
        description: "A Static website that showcases simple, heartwarming recipes with easy instructions.",
        course: "Information Technology Assistant",
        github: "https://github.com/PLayzGreninja/A_Simple_Recipe_fromtheHeart.git"
    },
    {
        title: "Playz Pizzaria Web App",
        description: "A Static website for Playz Pizzaria that displays a dynamic pizza menu with descriptions and GitHub integration.",
        course: "Information Technology Assistant",
        github: "https://github.com/PLayzGreninja/Playz_Pizzaria.git"
    }
];

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function () {
    // Set current year in footer
    document.getElementById('current-year').textContent = new Date().getFullYear();

    // Load projects dynamically
    const projectsContainer = document.getElementById('projects-container');

    projects.forEach(project => {
        const projectCol = document.createElement('div');
        projectCol.className = 'col-md-6 col-lg-4';

        projectCol.innerHTML = `
                    <div class="card project-card h-100">
                        <div class="card-body">
                            <span class="badge bg-secondary mb-2">${project.course}</span>
                            <h5 class="card-title">${project.title}</h5>
                            <p class="card-text">${project.description}</p>
                        </div>
                        <div class="card-footer bg-transparent border-top-0">
                            <a href="${project.github}" target="_blank" class="btn btn-outline-primary">
                                <i class="fab fa-github me-2"></i> View on GitHub
                            </a>
                        </div>
                    </div>
                `;

        projectsContainer.appendChild(projectCol);
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });
});