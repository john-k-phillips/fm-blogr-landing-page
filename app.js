let isOpen = false;

const toggleNav = () => {
    const navList = document.querySelector('.nav-list');
    const hamburger = document.querySelector('.hamburger-btn');
    if (isOpen) {
        navList.style.display = 'flex';
        isOpen = !isOpen
        hamburger.ariaExpanded = 'true';
    } else {
        navList.style.display = 'none';
        isOpen = !isOpen
        hamburger.ariaExpanded = 'false';
    }
}