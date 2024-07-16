var slideIndex = 0;
        var slides = document.querySelectorAll('.slide');

        function moveSlide(n) {
            slideIndex += n;
            if (slideIndex >= slides.length) {
                slideIndex = 0; // Reiniciar al principio cuando llegue al final
            }
            if (slideIndex < 0) {
                slideIndex = slides.length - 1; // Ir al último slide si se pasa del primero
            }
            var displacement = -slideIndex * (100 / 3); // Ancho de cada imagen
            document.querySelector('.slider').style.transform = 'translateX(' + displacement + '%)';
        }