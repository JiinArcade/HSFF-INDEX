$('.gnb-main-item').hover(function() {
  $(this).find('.sub').stop().slideDown(500);
  $(this).children("a").addClass("active");
}, function() {
  $(this).find('.sub').stop().slideUp(500);
  $(this).children("a").removeClass("active");
})

//자바스크립트
// document.querySelector('.gnb-open-btn').addEventListener('click', function() {
//   //.gnb-open-btn을 클릭 했을 때 sidebar에게 is-active라는 클래스를 추가
//   document.querySelector('.sidebar').classList.add('is-active');
// })

// document.querySelector('.sidebar-btn').addEventListener('click', function() {
//   //.sidebar-btn을 클릭햇을 때 sidebar에게 is-active라는 클래스를 제거 
//   document.querySelector('.sidebar').classList.remove('is-active');
// })

//제이커리
$('.gnb-open-btn').on('click', function() {
  $('.sidebar').addClass('is-active');
})
$('.sidebar-btn').on('click', function() {
  $('.sidebar').removeClass('is-active');
})



