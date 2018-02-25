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
});