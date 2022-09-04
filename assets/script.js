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