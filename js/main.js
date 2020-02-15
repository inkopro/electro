var mySwiper = new Swiper('.team-container', {
  slidesPerView: 3,
  loop: true,
  navigation: {
    nextEl: '.teams-slider_teamright',
    prevEl: '.teams-slider_teamleft',
  },
  breakpoints: {
    1251: {
      slidesPerView: 3
    },
    // 1250: {
    //   slidesPerView: 2
    // },
    1000: {
      slidesPerView: 2
    },
    320: {
      slidesPerView: 1
    }
    
  }
  
});

var mySwiperr = new Swiper('.work-container', {
  slidesPerView: 1,
  loop: true,
  navigation: {
    nextEl: '.work-button_right',
    prevEl: '.work-button_left',
  },
  
});
var mySwiperr = new Swiper('.feedback-container', {
  slidesPerView: 1,
  loop: true,
  pagination: {
    el: '.feedback-pagination',
    bulletClass: 'feedback-bullet',
    bulletActiveClass: 'feedback-bullet_active',
    clickable: true,
  },
  
});