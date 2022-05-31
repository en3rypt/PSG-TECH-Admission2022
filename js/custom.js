$(window).scroll(function () {
    $('#primary-nav').toggleClass('scrolled', $(this).scrollTop() > 50);
    // $('#secondary-nav').toggleClass('fixed', $(this).scrollTop() > $('#secondary-nav').offset().top);

});

// $('#primary-nav').outerHeight()
// $('#secondary-nav').position().top

var fixmeTop = $('.fixme').offset().top;       // get initial position of the element

$(window).scroll(function () {                  // assign scroll event listener

    var currentScroll = $(window).scrollTop(); // get current position

    if (currentScroll >= fixmeTop) {           // apply position: fixed if you
        $('.fixme').css({                      // scroll to that element or below it
            position: 'fixed',
            top: $('#primary-nav').outerHeight(),
            left: '0',
            width: "100%",
            'z-index': '100'
        });
    } else {                                   // apply position: static
        $('.fixme').css({                      // if you scroll above it
            position: 'static'
        });
    }

});