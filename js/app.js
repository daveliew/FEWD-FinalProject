// Use document ready to ensure DOM is ready for JS before executing
$(document).ready(function() {
  //Define submit and attach to submit-btn
  var submit = $('#submit-btn');
  // Create function and use .click on submit-btn to call fn
  submit.click(function() {
    //Added event.preventDefault to prevent incorrect form submission
    event.preventDefault();

    //Define variable city and city-type for function, and use .val(), .trim() and .toLowerCase() to adjust input for function
    var cityType = $('#city-type').val();
    var city = cityType.toLowerCase().trim();

    // Use if-else logic to match submission to required background, using  attribute
    if (city === 'new york' || city === 'new york city' || city === 'nyc') {
      $('body').attr('class', 'nyc').fadeIn(700);
    } else if (city === 'san francisco' || city === 'sf' || city === 'bay area') {
      $('body').attr('class', 'sf').fadeIn(700);
    } else if (city === 'los angeles' || city === 'la' || city === 'lax') {
      $('body').attr('class', 'la').fadeIn(700);
    } else if (city === 'austin' || city === 'atx') {
      $('body').attr('class', 'austin').fadeIn(700);
    } else if (city === 'sydney' || city === 'syd') {
      $('body').attr('class', 'sydney').fadeIn(700);
    }

    //This resets the form
    $("form").trigger("reset");
  });
});
