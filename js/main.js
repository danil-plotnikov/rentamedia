new WOW().init();

//up 

let offsetTop = $(window).height() * 2;
$(window).scroll(function(event) {
    if ($(document).scrollTop() > offsetTop) {
        $('.up').addClass('active');
    } else {
        $('.up').removeClass('active');
    }
});

$('.up').click(function() {
    $('body,html').animate({ scrollTop: 0 }, 0);
});

//nav

$('.header-burger').click(function() {
    $('.nav').toggleClass('active');
    $('html').toggleClass('scroll')
});

$('.nav a').click(function() {
    if ($(window).width() < 600) {
        $('.nav').toggleClass('active');
        $('html').toggleClass('scroll')
    }

});


//sliders

let clientsSlider = $('.clients-slider');
clientsSlider.owlCarousel({
    loop: true,
    dots: true,
    dotsEach: true,
    items: 4,
    margin: 0,
    responsive: {
        0: {
            items: 1,
            margin: 5,
        },
        600: {
            items: 4,
            margin: 0,
        }
    }
});
$('.clients-arrow__prev').click(function() {
    clientsSlider.trigger('prev.owl.carousel');
})
$('.clients-arrow__next').click(function() {
    clientsSlider.trigger('next.owl.carousel');
})

let knowSlider = $('.know-bottom__slider');
knowSlider.owlCarousel({
    loop: true,
    dots: true,
    dotsEach: true,
    items: 4,
    margin: 50,
    responsive: {
        0: {
            items: 1,
            margin: 5,
        },
        600: {
            items: 4,
            margin: 50,
        }
    }
});
$('.know-bottom__arrow-prev').click(function() {
    knowSlider.trigger('prev.owl.carousel');
})
$('.know-bottom__arrow-next').click(function() {
    knowSlider.trigger('next.owl.carousel');
})

let caseSlider = $('.case-slider');
caseSlider.owlCarousel({
    loop: true,
    dots: true,
    dotsEach: true,
    items: 2,
    margin: 70,
    responsive: {
        0: {
            items: 1,
            margin: 5,
        },
        600: {
            items: 2,
            margin: 70,
        }
    }
});
$('.case-arrow__prev').click(function() {
    caseSlider.trigger('prev.owl.carousel');
})
$('.case-arrow__next').click(function() {
    caseSlider.trigger('next.owl.carousel');
})

let teamSlider = $('.team-slider');
teamSlider.owlCarousel({
    loop: true,
    dots: true,
    dotsEach: true,
    items: 3,
    margin: 56,
    responsive: {
        0: {
            items: 1,
            margin: 5,
        },
        600: {
            items: 3,
            margin: 56,
        }
    }
});
$('.team-slider__prev').click(function() {
    teamSlider.trigger('prev.owl.carousel');
})
$('.team-slider__next').click(function() {
    teamSlider.trigger('next.owl.carousel');
})

let teamReviews = $('.team-reviews__slider');
teamReviews.owlCarousel({
    loop: true,
    dots: true,
    dotsEach: true,
    items: 1,
    margin: 5

});
$('.team-reviews__prev').click(function() {
    teamReviews.trigger('prev.owl.carousel');
})
$('.team-reviews__next').click(function() {
    teamReviews.trigger('next.owl.carousel');
})

let provideSlider = $('.provide-slider');
provideSlider.owlCarousel({
    loop: true,
    dots: true,
    dotsEach: true,
    items: 4,
    margin: 56,
    responsive: {
        0: {
            items: 1,
            margin: 5,
        },
        600: {
            items: 4,
            margin: 56,
        }
    }
});
$('.provide-arrow__prev').click(function() {
    provideSlider.trigger('prev.owl.carousel');
})
$('.provide-arrow__next').click(function() {
    provideSlider.trigger('next.owl.carousel');
})




//nav

let headerHeight;

if ($(window).width() > 600) {
    headerHeight = $('.nav').offset().top + $('.nav').height();
} else {
    headerHeight = $('.header').offset().top + $('.header').height();
}

$(window).scroll(function() {

    if ($(window).width() > 600) {
        if ($(window).scrollTop() >= headerHeight) {
            $('.nav').addClass('fixed')
        } else if ($(window).scrollTop() <= headerHeight) {
            $('.nav').removeClass('fixed')
        }
    } else {
        if ($(window).scrollTop() >= headerHeight) {

            $('.header').addClass('fixed')

        } else if ($(window).scrollTop() <= headerHeight) {

            $('.header').removeClass('fixed')
        }
    }


})



//custom-scrollbar
$(".know-more__text").mCustomScrollbar();

$(".popup-politic__wrap").mCustomScrollbar();

//mask
$('.phone').mask('+7(999)999-99-99');

//case

$('.case-btn').click(function() {
    $('.case-btn').removeClass('active');
    $(this).addClass('active');
    let caseNum = $(this).data('btn');
    $('.case-slider').removeClass('active');
    $('.case-slider[data-caseSlider="' + caseNum + '"]').addClass('active')
});

//questions

$('.questions-block').click(function() {
    $(this).toggleClass('active');
    $(this).find('.questions-block__answer').slideToggle();
});

//team
$('.team-text p').click(function() {
    $(this).siblings().removeClass('active')
    $(this).addClass('active')
    $('.team-slider').removeClass('active')
    $('.team-slider-' + $(this).data('team')).addClass('active')
});

//popup
$(document).ready(function() {
    setTimeout(() => {
        $('.popup-calc').css('left', '2%');
    }, 10000);
});

$('.popup-calc__close, .popup-calc a').click(function(e) {
    $('.popup-calc').css('left', '-100%');
});

$('.popup-close, .popup-bg').click(function(e) {
    $('.popup').hide();
    $('html').removeClass('scroll')
});

$('.popup-request__open').click(function() {
    $('.popup-request').css('display', 'flex')
    $('html').addClass('scroll')
});

$('.popup-politic__open').click(function() {
    $('.popup-politic').css('display', 'flex')
    $('html').addClass('scroll')
});

$('.popup-request2__open').click(function() {
    $('.popup-request2').css('display', 'flex')
    $('html').addClass('scroll')
});

$(document).mouseleave(function() {
    if (event.clientY < 0 || event.clientY < 3) {

        let leave = 1;
        if (+$.cookie('leave-popup')) {
            leave = 0;
        }
        if (leave) {
            $('.popup-list').css('display', 'flex');
            $('body, html').css({ 'overflow': 'hidden', 'max-height': '100%' })
            $.cookie('leave-popup', 1, { expires: 7 });
        }

    }
});

//quiz

let total = 0;


$('.quiz-question').each(function(indexInArray, valueOfElement) {
    let questionBlock = indexInArray + 1
    $(this).attr('data-q', questionBlock);
    $(this).find('input').attr('name', 'q-' + questionBlock)
    total = total + 1;
});

let quizScroll;

if ($(window).width() < 600) {
    quizScroll = $(".quiz-wrap").offset().top - $('.header').outerHeight()

} else {
    quizScroll = $(".quiz-wrap").offset().top - $('.nav').outerHeight()
}


let questionNumber = 1;
let inputNumber;

let elem = $('.quiz-form').find("input");


$('.quiz-form input[type="text"]').keydown(function() {
    $('.quiz-btn__next').removeAttr('disabled');
});

$('.quiz-form input[type="text"]').change(function() {
    $('.quiz-btn__next').removeAttr('disabled');
});


$(elem).on('change', function() {
    $('.quiz-btn__next').removeAttr('disabled');
});


let valid = {};

$('.quiz-btn__next, .quiz-question input[type="radio"]').click(function() {
    $('.quiz-btn__prev').css('display', 'flex');

    if (questionNumber < total) {
        setTimeout(() => {
            questionNumber++;
            $('.quiz-btn__next').attr('disabled', 'true')
            validNumber = questionNumber - 1
            valid['quiestion-' + validNumber] = true;
            console.log(valid)
            if (valid['quiestion-' + questionNumber] == true) {
                $('.quiz-btn__next').removeAttr('disabled');
            }
            $('.quiz-question.active').hide();
            $('.quiz-question.active').removeClass('active');
            $('.quiz-question[data-q=' + questionNumber + ']').fadeIn('slow')
            $('.quiz-question[data-q=' + questionNumber + ']').addClass('active');
            $('html, body').animate({
                scrollTop: quizScroll
            }, 0);
            lineWidth()
        }, 500);

    } else {
        setTimeout(() => {
            $('html, body').animate({
                scrollTop: quizScroll
            }, 0);
            $('.quiz-wrap').hide();
            $('.quiz-load').addClass('active');

            setTimeout(() => {
                $('.quiz-load').hide();
                $('.quiz-result').show();

            }, 2000);

        }, 500);

    }
});


$('.quiz-btn__prev').click(function() {
    if (questionNumber > 2) {
        questionNumber--;
        if (valid['quiestion-' + questionNumber] == true) {
            $('.quiz-btn__next').removeAttr('disabled');
            console.log('valid')
        }
        // $('.quiz-btn__next').removeAttr('disabled');
        $('.quiz-question.active').hide();
        $('.quiz-question.active').removeClass('active');
        $('.quiz-question[data-q=' + questionNumber + ']').fadeIn('slow')
        $('.quiz-question[data-q=' + questionNumber + ']').addClass('active');

        $('html, body').animate({
            scrollTop: quizScroll
        }, 0);
    } else if (questionNumber == 2) {
        $('html, body').animate({
            scrollTop: quizScroll
        }, 0);
        questionNumber--;
        $('.quiz-btn__next').removeAttr('disabled');
        $('.quiz-question.active').hide();
        $('.quiz-question.active').removeClass('active');
        $('.quiz-question[data-q=' + questionNumber + ']').fadeIn('slow')
        $('.quiz-question[data-q=' + questionNumber + ']').addClass('active');
        $('.quiz-hint').css('display', 'flex');
        $('.quiz-btn__prev').hide();
    }
    lineWidth()
});


let lineCurrent;

lineWidth();

function lineWidth() {
    let lineCurrent = Math.round((questionNumber - 1) / total * 100);
    $('.quiz-line__current').text(lineCurrent + '%');
    $('.quiz-line__bg').css('width', lineCurrent + '%')
}

$('.quiz-question input').click(function(e) {
    if ($(this).attr('type') == 'checkbox') {
        $(this).parent('label').toggleClass('active')
        console.log('check')
    } else {
        $(this).parent('label').siblings().removeClass('active')
        $(this).parent('label').addClass('active')
    }

});

$('label.inactive').click(function() {
    $(this).toggleClass('active')
});