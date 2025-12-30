window.addEventListener('DOMContentLoaded', () => {
    const fills = document.querySelectorAll('.progress-bar');
    fills.forEach(bar => {
        const fill = bar.querySelector('.progress-fill');
        const percentSpan = bar.querySelector('.percent');
        const percent = fill.getAttribute('data-percent');
        fill.style.width = percent + '%';
        percentSpan.style.left = `calc(${percent}% - 15px)`; // moves percent above end of fill
    });
});
