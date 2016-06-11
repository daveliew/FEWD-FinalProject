// Use document ready to ensure DOM is ready for JS before executing
$(document).ready(function() {

    //sticky navbar
    var navbar = $('nav');
    var navbarTop = $('nav').offset().top;

    $(window).scroll(function() {
        var scrolled =
            $(window).scrollTop();
        if (scrolled > navbarTop) {
            navbar.addClass('sticky')
        } else {
            navbar.removeClass('sticky')
        };
    });

    //dropdown selection trigger
    $("#select1").change(function() {
        if ($(this).data('options') == undefined) {
            $(this).data('options', $('#select2 option').clone());
        }
        var id = $(this).val();
        var options = $(this).data('options').filter('[value=' + id + ']');
        $('#select2').html(options);
    });


    //Using submit-btn we get guestType which triggers product image display in .imageholder
    var submit = $('#submit-btn');
    submit.click(function() {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $(".imageholder").offset().top
        }, 1000);

        var guestType = $('#select1').val();
        console.log($('.imagechange'));
        console.log(guestType);
        switch (guestType) {
            case '1':
                $('.imagechange').attr('src', 'https://unsplash.it/600/400?image=111');
                break;
            case '2':
                $('.imagechange').attr('src', 'https://unsplash.it/600/400?image=222');
                break;
            case '3':
                $('.imagechange').attr('src', 'https://unsplash.it/600/400?image=333');
                break;
            default:
        };
        $("form").trigger("reset");
    });
});
