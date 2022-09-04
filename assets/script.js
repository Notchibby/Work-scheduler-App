// displays current day
$("#currentDay").text(moment().format("dddd, MMMM Do"));

// displays current time
$("#currentTime").text(moment().format("HH:mm"));

var button = $('.saveBtn')

// saves the event scheduled to local storage
$(document).ready(function () {
    button.on("click", function (event) {
        event.preventDefault();
        var description = $(this).siblings('.col-sm-10').val().replace(time);
        var time = $(this).parent().attr('id');
        localStorage.setItem(time, JSON.stringify(description));
    });
    // displays color code for timeblock relative to the current time (past, present and future)
    function currentTime() {
        var current = moment().hours()
        var timeBlock = $('.time-block')
        timeBlock.each(function () {
            var hour = parseInt($(this).attr("id"))
            // color code if time is at the present
            if (hour === current) {
                $(this).children('.col-sm-10').attr('class', 'present col-sm-10')
            }
            // color code if time has past
            else if (current > hour) {
                $(this).children('.col-sm-10').attr('class', 'past col-sm-10')
            }
            // color code if time is in the future
            else {
                $(this).children('.col-sm-10').attr('class', 'future col-sm-10')
            }
        })
    };
    currentTime()
    // retrieves schedule from the local storage and displays on the corresponding textblock
    $("#5 textarea").val(JSON.parse(localStorage.getItem("5")))
    $("#6 textarea").val(JSON.parse(localStorage.getItem("6")))
    $("#7 textarea").val(JSON.parse(localStorage.getItem("7")))
    $("#8 textarea").val(JSON.parse(localStorage.getItem("8")))
    $("#9 textarea").val(JSON.parse(localStorage.getItem("9")))
    $("#10 textarea").val(JSON.parse(localStorage.getItem("10")))
    $("#11 textarea").val(JSON.parse(localStorage.getItem("11")))
    $("#12 textarea").val(JSON.parse(localStorage.getItem("12")))
    $("#13 textarea").val(JSON.parse(localStorage.getItem("13")))
    $("#14 textarea").val(JSON.parse(localStorage.getItem("14")))
    $("#15 textarea").val(JSON.parse(localStorage.getItem("15")))
    $("#16 textarea").val(JSON.parse(localStorage.getItem("16")))
    $("#17 textarea").val(JSON.parse(localStorage.getItem("17")))
    $("#18 textarea").val(JSON.parse(localStorage.getItem("18")))
})
