$(document).ready(function() {


  var Menu = {

      body: $('.menu'),
      button: $('.button'),
      tools: $('.tools')

  };

  Menu.button.click(function () {
      Menu.body.toggleClass('menu--closed');
      Menu.body.toggleClass('menu--open');
      Menu.tools.toggleClass('tools--visible');
      Menu.tools.toggleClass('tools--hidden');
  });
  

  function initMap() {
    var uluru = {lat: -25.363, lng: 131.044};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 4,
      center: uluru
    });
    var marker = new google.maps.Marker({
      position: uluru,
      map: map
    });
  }


  var vid = document.getElementById('video-elem');
  var pauseButton = document.querySelector('.logo');

  if (window.matchMedia('(prefers-reduced-motion)').matches) {
      vid.removeAttribute("autoplay");
      vid.pause();
      pauseButton.innerHTML = "Paused";
  }

  function vidFade() {
    vid.classList.add("stopfade");
  }

  vid.addEventListener('ended', function()
  {
  // only functional if "loop" is removed 
  vid.pause();
  // to capture IE10
  vidFade();
  });


  pauseButton.addEventListener("click", function() {
    vid.classList.toggle("stopfade");
    if (vid.paused) {
      vid.play();
      //pauseButton.innerHTML = "Pause";
    } else {
      vid.pause();
      //pauseButton.innerHTML = "Paused";
    }
  })
});