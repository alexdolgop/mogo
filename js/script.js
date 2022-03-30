$(document).ready(function () {
    $('.header__burger').click(function (event) {
        $('.header__burger, .nav-mobile').toggleClass('active');
    });


});

const animItems = document.querySelectorAll('.anim-items');
  
if(animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll() {
        for (let index = 0; index < animItems.length; index++){
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

        let animItemPoint = window.innerHeight - animItemHeight / animStart;
        if (animItemHeight > window.innerHeight) {
            animItemPoint = window.innerHeight - window.innerHeight / animStart;
        }   
        
        if((window.pageYOffset > animItemOffset - animItemPoint)){
            animItem.classList.add('active');

        } else {
            if (!animItem.classList.contains('.anim-no-hide')){
                animItem.classList.remove('active');
            }    
        }          
      }
    }

  function offset(el) {
      const rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft}
  }

  setTimeout(() => {
      animOnScroll();
  }, 300);

};

// Код на jQuery

// Спойлеры

$(document).ready(function() {
    $('.spoilers__title').click(function(event){
     if($('.spoilers__items').hasClass('one')){
        $('.spoilers__title').not($(this)).removeClass('active');
        $('.spoilers__text').not($(this).next()).slideUp(300);
     }   
     $(this).toggleClass('active').next().slideToggle(300);
    });

});


//Слайдер

$(document).ready(function() {
 $('.slider').slick({
   arrows: true, 
   slidesToShow: 3,
   slidesToScroll: 1,
   speed: 700,
   easing: 'ease',
   autoplay: true,
   Infinite: false,
   pauseFocus: true
 });   
});  

//# sourceMappingURL=main-dist-dist.js.map