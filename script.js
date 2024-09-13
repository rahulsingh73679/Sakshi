const noBtn = document.getElementById('no-btn');
const yesBtn = document.getElementById('yes-btn');
const modal = document.getElementById('popup-modal');
const closeBtn = document.querySelector('.close-btn');

// Desktop: No Button Movement on Hover
noBtn.addEventListener('mouseover', () => {
    const container = document.querySelector('.container');
    const containerRect = container.getBoundingClientRect();
    const buttonRect = noBtn.getBoundingClientRect();

    const maxX = containerRect.width - buttonRect.width;
    const maxY = containerRect.height - buttonRect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
});

// Mobile: No Button Movement on Touch
noBtn.addEventListener('touchstart', () => {
    const container = document.querySelector('.container');
    const containerRect = container.getBoundingClientRect();
    const buttonRect = noBtn.getBoundingClientRect();

    const maxX = containerRect.width - buttonRect.width;
    const maxY = containerRect.height - buttonRect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
});

// Yes Button Click - Show Modal
yesBtn.addEventListener('click', () => {
    modal.style.display = 'flex';
});

// Close Modal on Close Button Click
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close Modal when clicking outside the modal content
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});
