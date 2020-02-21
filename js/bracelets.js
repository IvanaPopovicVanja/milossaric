var winHeight;
var footerHeight;
var sectionId;
var sectionPosition;
var fromTop;
var mainHeader = $('.main-header');
// zadavanje visine sekcijama

function sectionHight() {
 winHeight = $(window).height();
 footerHeight = $('.main-footer').outerHeight();
 console.log(winHeight);
 console.log(footerHeight);
 $('#home, #products, #bracelets').css('min-height', winHeight);
 $('contact').css('min-height', winHeight - footerHeight);
}
sectionHight();

//  resize

$(window).on('resize', function() {
  sectionHight();
});
// navigacija
$('nav,.nav-button').on('click', function (){
  $('nav').fadeToggle(300);
  $('.nav-button').toggleClass('white');
});
// Smoth scroll
$('nav a').on('click', function (e) {
  e.preventDefault();

  // preuzimanje id-ja sekcije
sectionId = $(this).attr('href');
console.log(sectionId);
sectionPosition = $(sectionId).offset().top;
console.log(sectionPosition);

$('html, body').animate({
  scrollTop : sectionPosition
}, 1000);
});

 function goBack() {
  window.history.back();
};

// skupljanje headera na scrolling
$(window).on('scroll', function () {
  fromTop = $(window).scrollTop();
  console.log(fromTop);


  if(fromTop > 100) {
    mainHeader.addClass('change-header');
  } else {
    mainHeader.removeClass('change-header');
  }
});

$('#contact-form').validate();
$('#view .img-holder a').magnificPopup({
  type: 'image',
  gallery : {
    enabled: true
  }
});
