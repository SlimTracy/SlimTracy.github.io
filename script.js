// Add cool animations or interactions using JavaScript
// Example: Animate the social buttons on hover

const socialButtons = document.querySelectorAll('.social-button');

socialButtons.forEach(button => {
    button.addEventListener('mouseover', () => {
        button.style.transform = 'scale(1.1)';
    });

    button.addEventListener('mouseout', () => {
        button.style.transform = 'scale(1)';
    });
});
