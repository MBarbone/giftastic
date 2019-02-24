$(document).ready(function(){

    var animalsArray = ["Tiger", "Giraffe", "Snake", "Hawk", "Shark", "Frog"];
    
    
    
    function createButton() {
    
        $("#animalButton").empty();
    
        for(var i=0; i < animalsArray.length; i++){
            var animalButton= $("<button>");
            animalButton.addClass("btn btn-dark animalBtn");
            animalButton.attr("data-name", animalsArray[i]);
            animalButton.text(animalsArray[i]);
            animalButton.appendTo("#animalButton");
        };
    };
    
    createButton();
    
    
    
    $("#animalSubmitButton").on("click", function(e){
        // prevent form submit
        e.preventDefault();
    
    
        // prevents empty form/empty buttons
        var emptyInput = $("#userInput").val();
        if (emptyInput == "") {
            alert("Enter an Animal");
                return false;
            };
    
    
    
        var animal = $("#userInput").val().trim();
        animalsArray.push(animal);
    
        createButton();
        
    
        // clears form after submission
        $("#animalForm")[0].reset();
    
    });
    
    
    
    $(document).on("click", ".animalBtn", function() {
        console.log('clicked')
    
    
        var animal = $(this).attr("data-name");
    
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=ixnZc1EjQv9Is2gTP7UhpXDZhKn9DeeS&limit=10";
    
        $.ajax({
            url: queryURL,
            method: "GET"
        })
        
        .then(function(response){
    
            $("#gifs").empty();
            for(var i=0; i < response.data.length; i++){
                var imageUrl = response.data[i].images.original.url;
                console.log(imageUrl);
                console.log(response);
                var animalImage = $("<img>");
    
                animalImage.attr("src", imageUrl);
                animalImage.attr("alt", "animal image");
    
                $("#gifs").prepend(animalImage);
    
            };
        });
    });
    
    
    
    
    
    
    
    
    
    
    
    
    
    });