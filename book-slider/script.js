let currentIndex = 0;
const books = document.querySelectorAll('.book');
const bookContainer = document.querySelector('.book-container');

document.body.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') {
        currentIndex = (currentIndex + 1) % books.length;
        updateBookDisplay();
    } else if (e.key === 'ArrowLeft') {
        currentIndex = (currentIndex - 1 + books.length) % books.length;
        updateBookDisplay();
    }
});

function updateBookDisplay() {
    const offset = -currentIndex * (books[0].clientWidth + 30); // 30 is the margin
    bookContainer.style.transform = `translateX(${offset}px)`;
}
