(function($){
  $(function(){

    $('.sidenav').sidenav();

  }); // end of document ready
})(jQuery); // end of jQuery name space


var allUnchecked = true;
var checkboxes = document.querySelectorAll('input[type="checkbox"]');

checkboxes.addEventListener('change', () => {
  for(var i=0; i<checkboxes.length; i++) {
    if(checkboxes[i].checked) {
      allUnchecked = false;
      break;
    }
  }

  if(allUnchecked) {
    // all checkboxes are unchecked
    document.getElementsByClassName('show').style.display = 'inline';
  } else {
    // at least one checkbox is checked
    document.getElementsByClassName('show').style.display = 'none';
  
  }
  
})

// loop through each checkbox and add a click event listener
checkboxes.forEach(function(checkbox) {
  checkbox.addEventListener('click', function() {
    // select the corresponding div based on the "data-target" attribute
    var target = document.getElementById(checkbox.dataset.target);
    // toggle the "hidden" class on the div
    target.classList.toggle('show');
  });
});

