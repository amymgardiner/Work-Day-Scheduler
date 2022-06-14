// Moment.js for date and time in the header
$("#currentDay").text(moment().format('LLLL'));


// first function, will run even if no text on page
function timeColor() {
    //get current hour of the day
    var currentTime = moment().hour();

    //loop over time blocks
    $(".time-block").each(function () {
        var blockTime = parseInt($(this).attr("id").split("hour")[1]);

        // check the time, and add the classes for background indicators depending on if the timeblock is in the past, present, or future
        // for the past
        if (blockTime < currentTime) {
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");
        }
        // for the present
        else if (blockTime === currentTime) {
            $(this).removeClass("past");
            $(this).removeClass("future");
            $(this).addClass("present");
        }
        // for the future
        else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");

        }
    })
}

// gets values from time block divs and saves them to local storage when the user clicks the save button, will not save if button isn't clicked
$(".saveBtn").on("click", function () {
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    localStorage.setItem(time, text);
})

// retrieves items from local storage and sets them into the proper time blocks
$("#hour9 .description").val(localStorage.getItem("hour9"));
$("#hour10 .description").val(localStorage.getItem("hour10"));
$("#hour11 .description").val(localStorage.getItem("hour11"));
$("#hour12 .description").val(localStorage.getItem("hour12"));
$("#hour13 .description").val(localStorage.getItem("hour13"));
$("#hour14 .description").val(localStorage.getItem("hour14"));
$("#hour15 .description").val(localStorage.getItem("hour15"));
$("#hour16 .description").val(localStorage.getItem("hour16"));
$("#hour17 .description").val(localStorage.getItem("hour17"));

// loads color for the first time
timeColor();

// reloads page every half hour so that the time block function is called continuously throughout the day
window.setTimeout( function() {
    window.location.reload();
}, 1800000);
  