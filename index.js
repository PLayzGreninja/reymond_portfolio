// Project data - can be easily updated
const projects = [
    {
        title: "Inventory Management System",
        description: "A full-stack application for tracking inventory with user authentication, built with Node.js, Express, and MongoDB.",
        course: "Database Programmer",
        github: "https://github.com/username/inventory-management"
    },
    {
        title: "Student Registration Portal",
        description: "Web application for student registration with course selection, built with PHP and MySQL.",
        course: "Computer Programmer",
        github: "https://github.com/username/student-registration"
    },
    {
        title: "Task Management App",
        description: "A React-based task management application with drag-and-drop functionality and local storage.",
        course: "Computer Programmer Assistant",
        github: "https://github.com/username/task-manager"
    },
    {
        title: "IT Support Ticket System",
        description: "A ticketing system for IT support teams to track and resolve issues, built with Python and Django.",
        course: "Information Technology Assistant",
        github: "https://github.com/PLayzGreninja/Project-2.git"
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