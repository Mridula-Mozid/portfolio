console.log("Portfolio loaded!");

// Theme Toggle Logic
const themeBtn = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;
const icon = themeBtn.querySelector('i');

// Check for saved user preference, if any, on load of the website
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    htmlElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'dark') {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }
} else {
    // Check system preference if no local storage
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (prefersDark) {
        htmlElement.setAttribute('data-theme', 'dark');
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }
}

themeBtn.addEventListener('click', () => {
    const isDark = htmlElement.getAttribute('data-theme') === 'dark';
    
    if (isDark) {
        // Switch to Light
        htmlElement.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    } else {
        // Switch to Dark
        htmlElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return; // Skip empty links
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Email Copy Functionality
const mailLink = document.getElementById('mail-link');
const toast = document.getElementById('toast');

if (mailLink) {
    mailLink.addEventListener('click', function(e) {
        e.preventDefault();
        const email = "mridulamozid@gmail.com";
        
        navigator.clipboard.writeText(email).then(() => {
            showToast();
        }).catch(err => {
            console.error('Failed to copy: ', err);
            // Fallback to default mailto behavior if copy fails
            window.location.href = this.href;
        });
    });
}

function showToast() {
    toast.className = "show";
    setTimeout(function(){ 
        toast.className = toast.className.replace("show", ""); 
    }, 3000);
}