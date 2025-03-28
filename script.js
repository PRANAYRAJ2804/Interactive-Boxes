// JavaScript to handle hover effect for all boxes
document.querySelectorAll('.box').forEach(box => {
    box.addEventListener('mouseenter', () => {
        box.style.transform = 'scale(1.05)';
        box.style.boxShadow = '0 4px 10px rgba(255, 105, 180, 0.5)';
    });

    box.addEventListener('mouseleave', () => {
        box.style.transform = 'scale(1)';
        box.style.boxShadow = 'none';
    });
});
