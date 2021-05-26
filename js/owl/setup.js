$('.owl-carousel').owlCarousel({
    loop:false,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

let onTop = false;

$(window).scroll(function() {
  console.log(onTop);
  let scrollPosition = $(window).scrollTop();

  if(scrollPosition < 10 && !onTop) {
    onTop = true;
    $('header').removeClass('onTop');
  }

  if(scrollPosition > 10 && onTop) {
    onTop = false;
    $('header').addClass('onTop');    
  }
})

let isOpen = false;

$('.menu').click(function() {
  isOpen = !isOpen;
  if(isOpen){
    $('.dropdown').css('display','flex');    
    $('body').css('overflow','hidden')    
  }
  else{
    $('.dropdown').css('display','none');
    $('body').css('overflow','visible')
  }
})