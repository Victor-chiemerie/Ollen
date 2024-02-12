document.getElementById('message-button').addEventListener('click', function() {
    alert('You are loved! ❤️');
});

// Create love icons at random positions
function createLoveIcons() {
    const loveIcon = document.createElement('img');
    loveIcon.src = 'love-icon.png'; // Your love icon image URL
    loveIcon.width = 30;
    loveIcon.style.position = 'absolute';
    loveIcon.style.top = Math.random() * window.innerHeight + 'px';
    loveIcon.style.left = Math.random() * window.innerWidth + 'px';
    document.body.appendChild(loveIcon);
}

// Create 10 love icons on page load
for (let i = 0; i < 10; i++) {
    createLoveIcons();
}
