const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.getElementById('body');
const htmlPage = document.getElementById('port-page');
const profilePic = document.getElementById('author-pic');

const preloadDark = new Image();
preloadDark.src = 'pictures/profile-pic3.jpg';

const preloadLight = new Image();
preloadLight.src = 'pictures/profile-pic.jpg';

if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    htmlPage.classList.add('dark-mode');
    darkModeToggle.textContent = '☀️ Light Mode';
    
    if (profilePic) {
        profilePic.src = 'pictures/profile-pic3.jpg'; 
    }
}

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    htmlPage.classList.toggle('dark-mode');
    
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
        darkModeToggle.textContent = '☀️ Light Mode';
        
        if (profilePic) {
            profilePic.src = 'pictures/profile-pic3.jpg';
        }
    } else {
        localStorage.setItem('theme', 'light');
        darkModeToggle.textContent = '🌙 Dark Mode';
        
        if (profilePic) {
            profilePic.src = 'pictures/profile-pic.jpg';
        }
    }
});

function toggleTech(button) {
    const stack = button.nextElementSibling;
    stack.classList.toggle('hidden');

    button.classList.toggle('active');
}
