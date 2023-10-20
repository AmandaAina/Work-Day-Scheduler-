                                                                                                                                                      
$(function () {

  // TODO: Add a listener for click events on the save button. This code should
  $('.saveBtn').on('click', function() {

    var description = $(this).siblings('.description').val();

    var timeBlockID = $(this).parent().attr('id');

    localStorage.setItem(timeBlockID, description);
  });
  //
  // TODO: Add code to apply the past, present, or future class to each time
  function updateTimeBlockStyles() {
   
    var currentHour = dayjs().format('H');


    $('.time-block').each(function() {
       
        var timeBlockHour = parseInt($(this).attr('id').split('-')[1]);

        if (timeBlockHour < currentHour) {
            $(this).removeClass('present future').addClass('past');
        } else if (timeBlockHour === currentHour) {
            $(this).removeClass('past future').addClass('present');
        } else {
            $(this).removeClass('past present').addClass('future');
        }
    });
}

// Call the function to apply time block styles when the page loads.
updateTimeBlockStyles();
  // TODO: Add code to get any user input that was saved in localStorage and set
  var currentHour = dayjs().format('H');

 
   $('.time-block').each(function() {
     
       var timeBlockHour = parseInt($(this).attr('id').split('-')[1]);

    
       var savedDescription = localStorage.getItem("hour-" + timeBlockHour);

      
       if (savedDescription !== null) {
      
           $(this).find('textarea').val(savedDescription);
       }
   });

  // TODO: Add code to display the current date in the header of the page.

  $(document).ready(function () {
    // Get the current date 
    const currentDate = dayjs().format("dddd, MMMM D");
  
    $("#currentDay").text(currentDate);
  });
});
