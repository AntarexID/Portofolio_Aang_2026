document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    // Fungsi Filter
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // 1. Ubah status tombol aktif
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            // 2. Logika penyaringan kartu
            projectCards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');

                // Berikan efek transisi saat menghilang/muncul
                card.style.opacity = '0';
                card.style.transform = 'scale(0.9)';
                
                setTimeout(() => {
                    if (filterValue === 'semua' || filterValue === cardCategory) {
                        card.style.display = 'block';
                        // Trigger reflow untuk animasi muncul kembali
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'scale(1)';
                        }, 50);
                    } else {
                        card.style.display = 'none';
                    }
                }, 300); // Waktu tunggu sesuai transisi CSS
            });
        });
    });

    // Tambahkan transisi CSS secara dinamis ke semua kartu
    projectCards.forEach(card => {
        card.style.transition = 'all 0.4s ease';
    });

    // Animasi muncul pertama kali saat halaman dibuka
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
            }
        });
    }, { threshold: 0.1 });

    projectCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        observer.observe(card);
    });
});