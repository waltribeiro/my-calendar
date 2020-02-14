var timeArr = ["9", "10", "11", "12", "1", "2", "3", "4", "5"] // convert this to military time
var idContainer = $("#container"); // links under the header in HTML 
var id = 9;


for (i = 0; i < timeArr.length; i++) { // this is the time for the first column

    var idStr = id.toString(); // converts the variable "id" integer above into a string
    var newRow = $("<div>");
    var newRowTimeDiv = $("<div>");
    var newRowEventDiv = $("<textarea>");
    var newRowSaveDiv = $("<div>");

    newRow.attr("class", "row");
    newRow.attr("id", "hour-" + idStr);
    newRowTimeDiv.attr("class", "col-1 time text-center");
    newRowEventDiv.attr("class", "col-10 eventDefault event");
    newRowSaveDiv.attr("class", "col-1 save");

    newRowTimeDiv.text(timeArr[i]);
    newRowEventDiv.text("");
    newRowSaveDiv.text("")

    var now = moment().hour();

    // convert to military time

    if (timeArr[i] < 8) {
        militaryTime = (parseInt(timeArr[i]) + 12);
    } else {
        militaryTime = timeArr[i];
    }

    if (militaryTime < now) {
        newRowEventDiv.addClass("eventPast")
    } else if (militaryTime == now) {
        newRowEventDiv.addClass("eventPresent")
    } else {
        newRowEventDiv.addClass("eventFuture")
    }

    newRowTimeDiv.text(timeArr[i]);

    idContainer.append(newRow);
    newRow.append(newRowTimeDiv, newRowEventDiv, newRowSaveDiv);
    var newIcon = $("<button>");

    newIcon.attr("class", "fas fa-save");
    newRowSaveDiv.append(newIcon);
    id++;
}

$(document).on("click", ".fas", function() {
    // console.log("working", $(this).siblings(".eventDefault").val()); 
    var time = $(this).parent().parent().attr("id");
    var typedValue = $(this).parent().siblings(".event").val(); // grabbing the value from ".eventDefault"
    console.log("TURBO: typedValue", typedValue)
    console.log(time)
    localStorage.setItem(time, typedValue);
});

// assigning Value to an element (the <textarea>) 

$("#hour-9 .event").val(localStorage.getItem("hour-9")); 
$("#hour-10 .event").val(localStorage.getItem("hour-10"));
$("#hour-11 .event").val(localStorage.getItem("hour-11"));
$("#hour-12 .event").val(localStorage.getItem("hour-12"));
$("#hour-13 .event").val(localStorage.getItem("hour-13"));
$("#hour-14 .event").val(localStorage.getItem("hour-14"));
$("#hour-15 .event").val(localStorage.getItem("hour-15"));
$("#hour-16 .event").val(localStorage.getItem("hour-16"));
$("#hour-17 .event").val(localStorage.getItem("hour-17"));

$("#currentDay").text(moment().format("MMM Do @ h:mma"))