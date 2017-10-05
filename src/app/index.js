requirejs.config({
  paths: {
    'jquery': 'https://code.jquery.com/jquery-2.1.1.min',
    'Carousel':'../com/Carousel',
    'Exposure':'../com/Exposure',
    'Gotop':'../com/Gotop'
  }
});


define(['jquery','Carousel','Exposure','Gotop'],function($,Carousel,Lazy,Gotop){
  Carousel.init($('.carousel'))
  Lazy.init($('.lazy'))
  Gotop.init($('#gotop'))
})