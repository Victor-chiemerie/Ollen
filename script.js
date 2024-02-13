document.getElementById('message-button').addEventListener('click', function() {
    alert('You are loved! ❤️');
});

// Create love icons at random positions
function createLoveIcons() {
    const loveIcon1 = document.createElement('img');
    loveIcon1.src = 'assets/love-icon.png'; // Your love icon image URL
    loveIcon1.width = 50;
    loveIcon1.style.position = 'absolute';
    loveIcon1.style.top = Math.random() * window.innerHeight + 'px';
    loveIcon1.style.left = Math.random() * window.innerWidth + 'px';
    document.body.appendChild(loveIcon1);

    const loveIcon2 = document.createElement('img');
    loveIcon2.src = 'assets/love-icon1.png'; // Your love icon image URL
    loveIcon2.width = 40;
    loveIcon2.style.position = 'absolute';
    loveIcon2.style.top = Math.random() * window.innerHeight + 'px';
    loveIcon2.style.left = Math.random() * window.innerWidth + 'px';
    document.body.appendChild(loveIcon2);

    const loveIcon3 = document.createElement('img');
    loveIcon3.src = 'assets/pink-heart.png'; // Your love icon image URL
    loveIcon3.width = 50;
    loveIcon3.style.position = 'absolute';
    loveIcon3.style.top = Math.random() * window.innerHeight + 'px';
    loveIcon3.style.left = Math.random() * window.innerWidth + 'px';
    document.body.appendChild(loveIcon3);

    const loveIcon4 = document.createElement('img');
    loveIcon4.src = 'assets/pink-heart.png'; // Your love icon image URL
    loveIcon4.width = 40;
    loveIcon4.style.position = 'absolute';
    loveIcon4.style.top = Math.random() * window.innerHeight + 'px';
    loveIcon4.style.left = Math.random() * window.innerWidth + 'px';
    document.body.appendChild(loveIcon4);

    const loveIcon5 = document.createElement('img');
    loveIcon5.src = 'assets/red-heart.png'; // Your love icon image URL
    loveIcon5.width = 40;
    loveIcon5.style.position = 'absolute';
    loveIcon5.style.top = Math.random() * window.innerHeight + 'px';
    loveIcon5.style.left = Math.random() * window.innerWidth + 'px';
    document.body.appendChild(loveIcon5);
}

const createAngel = () => {
    const angelIcon = document.createElement('img');
    angelIcon.src = 'assets/angel1.png'; // Your love icon image URL
    angelIcon.width = 85;
    angelIcon.style.position = 'absolute';
    angelIcon.style.top = Math.random() * window.innerHeight + 'px';
    angelIcon.style.left = Math.random() * window.innerWidth + 'px';
    document.body.appendChild(angelIcon);

    const angelIcon1 = document.createElement('img');
    angelIcon1.src = 'assets/angel2.png'; // Your love icon image URL
    angelIcon1.width = 85;
    angelIcon1.style.position = 'absolute';
    angelIcon1.style.top = Math.random() * window.innerHeight + 'px';
    angelIcon1.style.left = Math.random() * window.innerWidth + 'px';
    document.body.appendChild(angelIcon1);

    const angelIcon2 = document.createElement('img');
    angelIcon2.src = 'assets/angel3.png'; // Your love icon image URL
    angelIcon2.width = 85;
    angelIcon2.style.position = 'absolute';
    angelIcon2.style.top = Math.random() * window.innerHeight + 'px';
    angelIcon2.style.left = Math.random() * window.innerWidth + 'px';
    document.body.appendChild(angelIcon2);
}

// Create 10 love icons on page load
for (let i = 0; i < 2; i++) {
    createLoveIcons();
}

createAngel();
