
var header = $('.js-header'),
    cloneHeader = header.clone();


cloneHeader.addClass('header--fixed');
header.before(cloneHeader);


$(window).scroll(function() {

    console.log($(window).scrollTop());

    if ( $(window).scrollTop() > 150 ) {
        cloneHeader.addClass('header--is-show');
    } else {
        cloneHeader.removeClass('header--is-show');
    }

});



///modal 
$('[data-modal=consultation]').on('click', function() {
    $('.overlay, #consultation').fadeIn('slow');
});
$('.modal__close').on('click', function() {
    $('.overlay, .modal, .modal_2, .modal_3, #consultation, #thanks, #order, #download ,#modal_house_1 ,#modal_house_3, #modal_house_2').fadeOut('slow');
});


$('[data-modal=order]').each(function(i) {
    $(this).on('click', function() {
        // $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
        $('.overlay, #order').fadeIn('slow');
    })
});
$('[data-modal=download]').on('click', function() {
    $('.overlay, #download').fadeIn('slow');
});

$('[data-modal=myModal_house_2]').each(function(i) {
    $(this).on('click', function() {
        
        $('.modal_2, #myModal_house_2').fadeIn('slow');
    })
});

$('[data-modal=myModal_house_3]').each(function(i) {
    $(this).on('click', function() {
        
        $('.modal_3, #myModal_house_3').fadeIn('slow');
    })
});

$('.modal-form_button').on('click', function() {
    $('.modal_privacy').fadeIn('slow');
});

$('[data-modal=myModal_house_1]').each(function(i) {
    $(this).on('click', function() {
        
        $('.modal, #myModal_house_1').fadeIn('slow');
    })
});

///scroll 

$('a[href^="#"').on('click', function() {

    let href = $(this).attr('href');

    $('html, body').animate({
        scrollTop: $(href).offset().top
    });
    return false;
});



$(function(){
    $("#phone").mask("+7(999) 999-9999");
    $(".contackt-form__input_phone").mask("+7(999) 999-9999");
});



///hamburger

$('.hamburger, .ham_hide').click(function(){
    $('.hamburger').toggleClass('hamburger_active');
    $('nav').toggleClass('header_nav_active');
    
    
});

$('.menu_item').click(function(){
    
    $('.hamburger').toggleClass('hamburger_active');
    $('nav').toggleClass('header_nav_active');
});




$(function() {
    $('#select-box').change(function(){
      $('.tabindex').hide();
      $('#' + $(this).val()).show();
    });
});



$('.variable-width').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true,
    responsive: [
        {
            breakpoint: 6000,
            settings: "unslick"
        },
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        
      ]
  });


  $(document).ready(function() {

	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
                    $(this).find("input").val("");
                    $('#consultation, #order').fadeOut();
                    $('.overlay, #thanks').fadeIn('slow');
                    
            
                    $('form').trigger('reset');
                });
                return false;
	});

});

$('.house__items_item').on('click',function(e) {
    e.preventDefault();
    $('.modal-content').fadeIn(300);
    $('html').addClass('is-fixed');
});


$('.modal__close').on('click',function(e) {
    e.preventDefault();
    $(this).parents('.modal-content').fadeOut(300);
    $('html').removeClass('is-fixed');
});
  





$(document).ready(function() {

	//E-mail Ajax Send
	$(".ice-cream").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "GET",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
                    $(this).find("input").val("");
                    $(' #download').fadeOut();
                    
                    
                    if (true /* условие, что форма отправлена верно */) 
                        var link = document.createElement('a');
                        // '/download.png' это URL скачиваемого файла
                        link.setAttribute('href', 'http://svbd-web.ru/download/Panorama_Sochi_4.pdf');
                        link.setAttribute('download', 'http://svbd-web.ru/download/Panorama_Sochi_4.pdf');
                        link.click();
            
                    $('form').trigger('reset');
                });
                return false;
	});

});