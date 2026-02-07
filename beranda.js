// Tunggu hingga seluruh konten DOM dimuat
document.addEventListener('DOMContentLoaded', () => {

    // 1. Navbar Scroll Effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
            navbar.style.padding = '15px 10%';
            navbar.style.transition = '0.4s';
        } else {
            navbar.style.boxShadow = 'none';
            navbar.style.padding = '20px 10%';
        }
    });

    // 2. Smooth Scrolling untuk Navigasi
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            
            // Pastikan link mengarah ke ID internal (bukan halaman lain)
            if (targetId.startsWith('#')) {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 70, // Offset untuk tinggi navbar
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // 3. Scroll Reveal Animation (Sertifikat Cards)
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        // State awal animasi
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s ease-out';
        
        observer.observe(card);
    });

    // 4. Logika Sederhana untuk Tombol (Opsional)
    const btnPrimary = document.querySelector('.btn-primary');
    btnPrimary.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector('#proyek').scrollIntoView({ behavior: 'smooth' });
    });

});