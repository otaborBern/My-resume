// scripts.js

document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');

    // Function to toggle the visibility of the next sibling element
    function toggleVisibility(event) {
        const nextElement = event.target.nextElementSibling;
        if (nextElement.style.display === 'none' || nextElement.style.display === '') {
            nextElement.style.display = 'block';
        } else {
            nextElement.style.display = 'none';
        }
    }

    // Add click event listeners to all section headings
    const sectionHeadings = document.querySelectorAll('h2, h3');
    sectionHeadings.forEach(heading => {
        heading.addEventListener('click', toggleVisibility);
        heading.style.cursor = 'pointer'; // Change cursor to pointer to indicate clickable
    });

    // Initially hide all section contents
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.display = 'none';
    });
});
