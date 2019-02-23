$(document).ready(function(){

var animals = ["Tiger", "Whale", "Dolphin", "Eagle"];



function createButton() {

    $("#animalButton").empty();

    for(var i=0; i < animals.length; i++){
        var animalButton= $("<button>");
        animalButton.addClass("btn btn-success animalBtn");
        animalButton.attr("data-name", animals[i]);
        animalButton.text(animals[i]);
        animalButton.appendTo("#animalButton");
    };
    console.log(animals)
};

createButton();



$("#animalSubmitButton").on("click", function(e){
    e.preventDefault();
    var emptyInput = $("#userInput").val();
    if (emptyInput == "") {
        alert("Enter an Animal");
            return false;
        };

    var animal = $("#userInput").val().trim();
    animals.push(animal);

    createButton();
    
    $("#animalForm")[0].reset();

});



$(".animalBtn").on("click", function() {
    console.log('clicked')


    var animal = $(this).attr("data-name");

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=ixnZc1EjQv9Is2gTP7UhpXDZhKn9DeeS";

    $.ajax({
        url: queryURL,
        method: "GET"
    })
    
    .then(function(response){

        for(var i=0; i < response.data.length; i++){
            var imageUrl = response.data[i].images.original.url;
            console.log(imageUrl);
            console.log(response);
            var animalImage = $("<img>");

            animalImage.attr("src", imageUrl);
            animalImage.attr("alt", "animal image");

            $("#images").prepend(animalImage);

        };
    });
});













});




// warnings only show up when I click 4 starter buttons, not user added buttons