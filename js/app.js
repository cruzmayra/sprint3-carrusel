var target = 0;

$(document).ready(function(){
  var $buttons = $(".control");
  var $previous = $('.previous');
  var $next = $('.next');

  $buttons.click(uploadImage);
  $previous.click(previousImage);
  $next.click(nextImage);

})

var uploadImage = function() {
  var $target = $(this).data("target");
  showImage($target);
  changeColorButton($target);
  previousImage($target);
  nextImage($target);
}

var showImage = function(target) {
  var $currentSlide = $("div.active");
  var $newImage = $("div[data-slide=" + target + "]");
  $currentSlide.removeClass("active");
  $newImage.addClass("active");
}

var changeColorButton = function(target) {
  var $currentButton = $("button.active");
  var $newButton = $("button[data-target=" + target + "]");
  $currentButton.removeClass("active");
  $newButton.addClass("active");
}

var previousImage = function(e) {
  e.preventDefault();
  target = target - 1;
  target = (target < 0) ? 4 : target;
  showImage(target);
  changeColorButton(target);
}

var nextImage = function(e) {
  e.preventDefault();
  target = target + 1;
  target = (target > 4) ? 0 : target;
  showImage(target);
  changeColorButton(target);
}
