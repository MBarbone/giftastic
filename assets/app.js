$(document).ready(function(){

var animals = ["Tiger", "Whale", "Dolphin", "Eagle"];


function createButton() {

    $("#animalButton").empty();

    for(var i=0; i < animals.length; i++){
        var animalButton= $("<button>");
        animalButton.addClass("btn btn-success animalBtn");
        animalButton.text(animals[i]);
        animalButton.appendTo("#animalButton");
    };
};

createButton();



$("#animalSubmitButton").on("click", function(){
    var userButton = $("<button>");
    var userInput = $("#userInput").val();
    userButton.addClass("btn btn-success animalBtn");
    userButton.text(userInput);
    userButton.appendTo("#animalButton");
    $("#animalForm").submit(function(e){
        e.preventDefault();
    });
});













});