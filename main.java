// slider.js
// Script pour faire défiler automatiquement les sliders de films

const sliders = document.querySelectorAll('.movie-slider, .popular-slider');

sliders.forEach(slider => {
    let scrollAmount = 0;
    const scrollMax = slider.scrollWidth - slider.clientWidth;

    setInterval(() => {
        scrollAmount += 1;
        if(scrollAmount >= scrollMax) scrollAmount = 0;
        slider.scrollTo({ left: scrollAmount, behavior: 'smooth' });
    }, 20);
});
