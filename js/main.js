$(function () {
  $("#main_title_video").YTPlayer({
    videoURL: "https://youtu.be/GQBQvb6miuo",
    containment: ".main_title_video",
    autoPlay: true,
    mute: true,
    startAt: 0,
    opacity: 1,
    showControls: false,
    playOnlyIfVisible: true,
    loop: true,
    // 화질설정
    quality: 'hd1080'
  });

  $('.main_slide .container').slick({
    slidesToShow: 3,
  });

  $('.main_story .container').slick({
    slidesToShow: 3,
  });


});