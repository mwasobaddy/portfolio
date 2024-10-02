    
document.addEventListener("DOMContentLoaded", function() {// show and hide side bar
    const sidebar = document.getElementById('sideTopNav');
    const toggleBtns = document.querySelectorAll('[id^="sidebarToggle"]');

    toggleBtns.forEach(toggleBtn => {
        toggleBtn.addEventListener('click', function() {
            sidebar.classList.toggle('active');
        });
    });

    // Close sidebar when clicking outside of it
    document.addEventListener('click', function(event) {
        const isClickInsideSidebar = sidebar.contains(event.target);
        const isClickOnToggleBtn = Array.from(toggleBtns).some(btn => btn.contains(event.target));

        if (!isClickInsideSidebar && !isClickOnToggleBtn && sidebar.classList.contains('active')) {
            sidebar.classList.remove('active');
        }
    });

    

    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
    });










    
    const titles = [
        "Full-Stack Developer",
        "Web Developer",
        "Front-End Developer",
        "Back-End Developer",
        "UI/UX Designer"
    ];
    let index = 0;
    let charIndex = 0;
    let currentTitle = "";
    let isDeleting = false;
    const typeSpeed = 100;
    const eraseSpeed = 50;
    const pauseTime = 1500;

    function type() {
        if (index === titles.length) {
            index = 0;
        }
        
        const currentFullTitle = titles[index];

        if (isDeleting) {
            currentTitle = currentFullTitle.substring(0, charIndex);
            charIndex--;
        } else {
            currentTitle = currentFullTitle.substring(0, charIndex + 1);
            charIndex++;
        }

        document.getElementById("typewriter").textContent = currentTitle;

        if (!isDeleting && charIndex === currentFullTitle.length) {
            isDeleting = true;
            setTimeout(type, pauseTime);
        } else if (isDeleting && charIndex < 0) {
            isDeleting = false;
            index++;
            charIndex = 0;
            setTimeout(type, typeSpeed);
        } else {
            setTimeout(type, isDeleting ? eraseSpeed : typeSpeed);
        }
    }

    type();
});