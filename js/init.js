(function($){
  $(function(){

    $('.sidenav').sidenav();

  }); // end of document ready
})(jQuery); // end of jQuery name space

// select all checkboxes with the "toggle" class
var checkboxes = document.querySelectorAll('.toggle');

// loop through each checkbox and add a click event listener
checkboxes.forEach(function(checkbox) {
  checkbox.addEventListener('click', function() {
    // select the corresponding div based on the "data-target" attribute
    var target = document.getElementById(checkbox.dataset.target);
    // toggle the "hidden" class on the div
    target.classList.toggle('show');
  });
});