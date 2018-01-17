var target = 0;
$(document).ready(function(){
  var $botones = $(".control");
  var $previous = $('.previous');
  var $next = $('.next');

  $botones.click(cargarImagen);
  $previous.click(previousImage);
  $next.click(nextImage);

})

var cargarImagen = function () {
  var $target = $(this).data("target");
  mostrarImagen($target);
  changeColorButton($target);
  previousImage($target);
  nextImage($target);
}

var mostrarImagen = function (target) {
  var $actualSlide = $("div.active");
  var $newImage = $("div[data-slide=" + target + "]");
  $actualSlide.removeClass("active");
  $newImage.addClass("active");
}

var changeColorButton = function (target) {
  var $actualButton = $("button.active");
  var $newButton = $("button[data-target=" + target+ "]");
  $actualButton.removeClass("active");
  $newButton.addClass("active");
}

var previousImage = function (e) {
  e.preventDefault();
  target = target - 1;
  target = (target < 0) ? 4 : target;
  mostrarImagen(target);
  changeColorButton(target);
}

var nextImage = function (e) {
  e.preventDefault();
  target = target + 1;
  target = (target > 4) ? 0 : target;
  mostrarImagen(target);
  changeColorButton(target);
}
