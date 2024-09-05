const hero = document.querySelector(".hero");



document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.querySelector('.nav-links');


    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('bookingForm');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        // Extract form data
        const formData = new FormData(form);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });

        // Simulate form submission
        form.classList.add('submitted');
        setTimeout(() => {
            form.reset();
            form.classList.remove('submitted');

        }, 1500); // Reset the form after 1.5 seconds
    });
});






var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    centeredSlides: true,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: false,
        autoplay: true,
    },
});


function subscribe() {
    const email = document.getElementById('email').value;
    if (email) {
        alert(`Thank you for subscribing with email: ${email}`);
    } else {
        alert('Please enter an email address.');
    }
}




