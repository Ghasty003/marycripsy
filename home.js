//Preloader section

window.addEventListener('load', () => {

  const preloader = $('.preloader');

  let pos = 0;

  let t = setInterval(() => {

    if( pos >= 50 ){

      preloader.css('display', 'none')
    }

    else{
      pos++;
    }

  }, 100);
});

//Burger Section

let ul = $('ul');

let burger = $('.burger');

burger.click(() => {
    

  ul.toggleClass('slide');

  burger.toggleClass('change');

});

const li = $('li');

li.click(() => {

  ul.removeClass('slide');

  burger.removeClass('change');

});


//Typedjs

let typed = new Typed('.auto', {
    strings : ['fantastic, delicious cakes.', 'ambrosial, appetizing Small chops.'],
    typeSpeed : 100,
    backSpeed : 100,
    loop : true,
});

//Glidejs

let glide = new Glide('.glide', {
    type: 'carousel',
    perView: 2,
    gap: -100,
    autoplay: 2000,
    focusAt: 'center',
    breakpoints: {
      900: {
      perView: 1
      },
      600: {
      perView: 1
    }
  }
});
  
glide.mount();

//Counter Section

$('.counth2').counterUp({
    delay: 10,
    time: 1500,
});

// Animate on scroll

AOS.init();