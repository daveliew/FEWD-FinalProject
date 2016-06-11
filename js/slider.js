// Use document ready to ensure DOM is ready for JS before executing
$(document).ready(function() {
    var slider = $('.slider-container');
    var slides = $('.slides li');
    var slidesNumber = slides.length;
    var arrowNav = $('.slider-nav a');
    var dotNav = $('.slider-dot-nav');
    var dots = $('.slider-dot-nav a');

    var selectedSlide = 0;
    var prevSlide = 0;
    var intervalId;
    var setAutoPlay = true;

    arrowNav.on('click', function(event) {
        event.preventDefault();
        if ($(this).hasClass('next')) {
            console.log('next');
            var newSlideIndex = selectedSlide + 1;
        } else {
            console.log('prev');
            var newSlideIndex = selectedSlide - 1;
        }
        showNewSlide(newSlideIndex);
    })

    dots.on('click', function(event) {
        event.preventDefault();
        var newSlideIndex = dots.index(this);
        showNewSlide(newSlideIndex);
    });

    function autoPlay() {
        intervalId = setInterval(function() {
            showNewSlide(selectedSlide + 1);
        }, 5000);
    }

    if (setAutoPlay) {
        autoPlay();
    }

    function showNewSlide(index) {
        if (index < 0) {
            index = slidesNumber - 1;
        }
        if (index > slidesNumber - 1) {
            index = 0;
        }
        prevSlide = selectedSlide;
        selectedSlide = index;

        for (var i = 0; i < slidesNumber; i++) {
            if (i < selectedSlide) {
                slides.eq(i).addClass('move-left').removeClass('selected visible');
                dots.eq(i).removeClass('selected');
            } else if (i == selectedSlide) {
                slides.eq(i).addClass('selected').removeClass('move-left');
                dots.eq(i).addClass('selected');
            } else {
                slides.eq(i).removeClass('selected move-left visible');
                dots.eq(i).removeClass('selected');
            }
        }

        slides.eq(prevSlide).addClass('visible');
    }


});
