// Simple smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');

        // Mobile Booking Logic: Open Modal instead of scroll
        if (href === '#booking' && window.innerWidth <= 768) {
            e.preventDefault();
            openModal();
            return;
        }

        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Clone testimonials for infinite scroll
document.addEventListener('DOMContentLoaded', () => {
    // Testimonials
    const grid = document.getElementById('testimonialGrid');
    if (grid) {
        const items = [...grid.children];
        items.forEach(item => {
            const clone = item.cloneNode(true);
            grid.appendChild(clone);
        });
    }

    // YouTube Auto Scroll
    const youtubeTrack = document.getElementById('youtubeTrack');
    if (youtubeTrack) {
        const videos = [...youtubeTrack.children];
        videos.forEach(video => {
            const clone = video.cloneNode(true);
            youtubeTrack.appendChild(clone);
        });
    }

    // MOBILE POPUP LOGIC (2s Delay)
    if (window.innerWidth <= 768) {
        const modal = document.getElementById('bookingModal');
        setTimeout(() => {
            if (modal && !sessionStorage.getItem('modalShown')) {
                openModal();
                sessionStorage.setItem('modalShown', 'true');
            }
        }, 2000);
    }
});

function openModal() {
    const modal = document.getElementById('bookingModal');
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeModal() {
    const modal = document.getElementById('bookingModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}
