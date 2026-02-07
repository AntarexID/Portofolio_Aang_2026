document.addEventListener('DOMContentLoaded', () => {

    // 1. Animasi Masuk (Fade In & Slide Up)
    const observeElements = (elements, delay = 0) => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    // Memberikan sedikit jeda antar elemen (stagger effect)
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }, index * delay);
                }
            });
        }, { threshold: 0.1 });

        elements.forEach(el => {
            // State awal elemen sebelum muncul
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'all 0.6s ease-out';
            observer.observe(el);
        });
    };

    // Jalankan animasi untuk kotak biografi
    const sections = document.querySelectorAll('.section-box');
    observeElements(sections, 200);

    // 2. Animasi Khusus untuk Tags Keterampilan agar muncul satu per satu
    const tags = document.querySelectorAll('.tag');
    const tagObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const allTags = entry.target.parentElement.querySelectorAll('.tag');
                allTags.forEach((tag, index) => {
                    setTimeout(() => {
                        tag.style.opacity = '1';
                        tag.style.transform = 'scale(1)';
                    }, index * 50); // Muncul cepat bergantian
                });
            }
        });
    }, { threshold: 0.5 });

    // State awal tags
    tags.forEach(tag => {
        tag.style.opacity = '0';
        tag.style.transform = 'scale(0.8)';
        tag.style.transition = 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
    });

    const tagsContainer = document.querySelector('.tags-container');
    if (tagsContainer) tagObserver.observe(tagsContainer);


    // 3. Highlight Link Aktif di Navbar
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath.split('/').pop()) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    console.log("Halaman Tentang berhasil dimuat dengan animasi.");
});