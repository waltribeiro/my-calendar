// 1.) should there be a delete function?
// should the applicatoin 

var timeArr = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"]
var idContainer = $("#container"); // links under the header in HTML 
var id = 9;

for (i = 0; i < timeArr.length; i++) { // this is the time for the first column

// var timeDiv = $("<div>");
// var eventDiv = $("<div>");
// var saveDiv = $("<div>");

var idStr = id.toString(); // converts the "id variable" integer above into into a string
var newRow = $("<div>");
var newRowTimeDiv = $("<div>");
var newRowEventDiv = $("<textarea>");
var newRowSaveDiv = $("<div>");

newRow.attr("class", "row");
newRow.attr("id", "hour-" + idStr); // ====================== can I combine this with row 17?
newRowTimeDiv.attr("class", "col-1 Time text-center");
newRowEventDiv.attr("class", "col-10 eventDefault");
newRowSaveDiv.attr("class", "col-1 Save");

newRowTimeDiv.text(timeArr[i]);
newRowEventDiv.text("");
newRowSaveDiv.text("")

idContainer.append(newRow);
newRow.append(newRowTimeDiv, newRowEventDiv, newRowSaveDiv);
var newIcon = $("<button>");

newIcon.attr("class", "far fa-save fa-2x pt-3");
newRow.append(newIcon);
id++;
}
$(document).on("click", ".far", function() {
// console.log("working", $(this).siblings(".eventDefault").val()); 
var time = $(this).parent().attr("id");
var typedValue = $(this).siblings(".event").val(); // grabbing the value from ".eventDefault"
localStorage.setItem(time, typedValue);
})

$("#hour-9 .eventDefault").val(localStorage.getItem("hour-9")); // assigning Value to an element (the <textarea>)
$("#hour-10 .eventDefault").val(localStorage.getItem("hour-10")); // assigning Value to an element (the <textarea>)
$("#hour-11 .eventDefault").val(localStorage.getItem("hour-11")); // assigning Value to an element (the <textarea>)
$("#hour-12 .eventDefault").val(localStorage.getItem("hour-12")); // assigning Value to an element (the <textarea>)
$("#hour-13 .eventDefault").val(localStorage.getItem("hour-13")); // assigning Value to an element (the <textarea>)
$("#hour-14 .eventDefault").val(localStorage.getItem("hour-14")); // assigning Value to an element (the <textarea>)
$("#hour-15 .eventDefault").val(localStorage.getItem("hour-15")); // assigning Value to an element (the <textarea>)
$("#hour-16 .eventDefault").val(localStorage.getItem("hour-16")); // assigning Value to an element (the <textarea>)
$("#hour-17 .eventDefault").val(localStorage.getItem("hour-17")); // assigning Value to an element (the <textarea>)

$("#currentDay").text(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));

// create conditional if we're past a certain point
// change the color use bootstrap <style>