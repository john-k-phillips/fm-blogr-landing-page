let isOpen = true;

const toggleNav = () => {
    const navList = document.querySelector('.nav-list');
    const hamburger = document.querySelector('.hamburger-btn');
    const hamburgerImage = document.querySelector('.hamburger-img');

    if (isOpen) {
        navList.style.display = 'flex';
        
        hamburger.ariaExpanded = 'true';
        hamburgerImage.src = './images/icon-close.svg'
        isOpen = !isOpen
    } else {
        navList.style.display = 'none';

        hamburger.ariaExpanded = 'false';
        hamburgerImage.src = './images/icon-hamburger.svg'
        isOpen = !isOpen
    }
}