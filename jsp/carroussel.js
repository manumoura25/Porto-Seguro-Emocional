function iniciarCarrossel() {
    const carrossels = document.querySelectorAll('.container-slide');
    carrossels.forEach(container => {
        const slide = container.querySelector('.carrossel-slide');
        const images = slide.querySelectorAll('.img-slides');
        const totalImages = images.length;
        let i = 0;


        function updateSlide() {
            slide.style.transform = `translateX(-${i * 100}%)`;
        }

        document.addEventListener("click", (event) => {
            if (event.target.id === "next") {
                i = (i + 1) % totalImages;
                updateSlide();
            }
        });

        document.addEventListener("click", (event) => {
            if (event.target.id === "prev") {
                i = (i - 1 + totalImages) % totalImages;
                updateSlide();
            }
        });

        // Auto avançar a cada 3 segundos dos slides

        setInterval(() => {
            if (i == totalImages - 1) {
                i = 0;
            } else {
                i++;
            }
            updateSlide()
        }, 5000);
    });
}
