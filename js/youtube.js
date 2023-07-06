     // 2. This code loads the IFrame Player API code asynchronously.
     var tag = document.createElement('script');

     tag.src = "https://www.youtube.com/iframe_api";
     var firstScriptTag = document.getElementsByTagName('script')[0];
     firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

     // 3. This function creates an <iframe> (and YouTube player)
     //    after the API code downloads.
     function onYouTubeIframeAPIReady() {
     new YT.Player('player', {
         videoId: 'An6LvWQuj_8',
         playerVars: {
           autoplay : true,
           loop: true,
           playlist: 'An6LvWQuj_8'
         },
         events:{
            onReady: function(event){
                event.target.mute()
            }
         }

       });
     }

        // 범위 랜덤 함수(소수점 2자리까지)
    function random(min, max) {
        // `.toFixed()`를 통해 반환된 문자 데이터를,
        // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
        return parseFloat((Math.random() * (max - min) + min).toFixed(2))
    }

    //  youtube img animation
     function floatingObject (selector, delay, size){
        // gsap ni hamgn ehnd 선택자를 받을거고 2rt 시간 , 3rt 옵션g awnaa
        gsap.to(selector, random(1.5, 2.5), {
            // deshe dosho 20px hodlono
           y: size,
            // repeat -1 ni loop
           repeat: -1,
        //    yoyo ni deesho doosho
           yoyo: true,
        //    gsap ease internets awchraw
        ease: Power1.easeInOuteaseInOut,
        // 1sek huleej bgad animation dahij ehlene
        delay:random(0, delay)
        })
     }
     floatingObject('.floating1', 1, 15);
     floatingObject('.floating2', .5, 15);
