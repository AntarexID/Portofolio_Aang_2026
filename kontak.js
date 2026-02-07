document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // 1. Mengambil data dari input
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            // 2. Mengatur nomor WhatsApp (Gunakan format internasional tanpa '+')
            const phoneNumber = "6285759251969";

            // 3. Menyusun template pesan agar rapi saat diterima di WA
            const whatsappText = `Halo Aang, ada pesan baru dari website portofolio:%0A%0A` +
                                 `*Nama:* ${encodeURIComponent(name)}%0A` +
                                 `*Email:* ${encodeURIComponent(email)}%0A` +
                                 `*Pesan:* ${encodeURIComponent(message)}`;

            // 4. Membuat URL WhatsApp
            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappText}`;

            // 5. Efek visual sebelum dialihkan
            const submitBtn = contactForm.querySelector('.btn-submit');
            submitBtn.innerText = "Mengalihkan ke WhatsApp...";
            submitBtn.disabled = true;

            setTimeout(() => {
                // 6. Membuka WhatsApp di tab baru
                window.open(whatsappUrl, '_blank');
                
                // Reset form setelah pengalihan
                contactForm.reset();
                submitBtn.innerText = "Kirim Pesan";
                submitBtn.disabled = false;
            }, 800);
        });
    }

    // Animasi muncul saat halaman dimuat (sama seperti sebelumnya)
    const wrapper = document.querySelector('.kontak-wrapper');
    if (wrapper) {
        wrapper.style.opacity = '1';
        wrapper.style.transform = 'translateY(0)';
    }
});