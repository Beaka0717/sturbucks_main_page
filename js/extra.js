     // tap menu swiper
     new Swiper('.notice-line .swiper', {
        direction: 'vertical',
        loop: true,
        autoplay: true
      });
      // tap menu image swiper
     new Swiper('.promotion .swiper', {
        loop: true, 
        slidesPerView: 3,
        spaceBetween: 10,
        centeredSlides: true,
        autoplay: {
          delay: 5000
        },
        pagination: {
          el: '.promotion .swiper-pagination',
          clickable: true
        },
        navigation:{
          prevEl:'.promotion .swiper-prev',
          nextEl:'.promotion .swiper-next'
        }
      });

      // footer swiper
      new Swiper('.awards .swiper', {
        // direction: 'horizontal', // 수평 슬라이드
        autoplay: true, // 자동 재생 여부
        loop: true, // 반복 재생 여부
        spaceBetween: 30, // 슬라이드 사이 여백
        slidesPerView: 5, // 한 번에 보여줄 슬라이드 개수
        // slidesPerGroup: 5, // 한 번에 슬라이드 할 개수(전체 개수로 나뉘어야 함)
        navigation: { // 슬라이드 이전/다음 버튼 사용 여부
          prevEl: '.awards .swiper-prev', // 이전 버튼 선택자
          nextEl: '.awards .swiper-next' // 다음 버튼 선택자
        }
      })
    //  promotion toggle 
 const promotionEl = document.querySelector('.promotion');
 const promotionToggleBtn = document.querySelector('.toggle-promotion');

 let isHidePromtion = false;
 promotionToggleBtn.addEventListener('click', function(){
   isHidePromtion = !isHidePromtion
   // isHidePromtion = !isHidePromtion gwl isHidePromtion nii false gsn valueg esergeer ni bolgoj og gsn utagtai
   if(isHidePromtion){
      // 숨김 처리
      promotionEl.classList.add('hide');
   }else{
      // 보임 처리
      promotionEl.classList.remove('hide');

} });
