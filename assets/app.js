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
    

    function dataPull() {
        console.log('clicked')
    
    
        var animal = $(this).attr("data-name");
    
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=ixnZc1EjQv9Is2gTP7UhpXDZhKn9DeeS&limit=10&rating=pg";
    
        $.ajax({
            url: queryURL,
            method: "GET"
        })
        
        .then(function(response){
    

            results = response.data;
            
            $("#gifs").empty();
            for(var i=0; i < response.data.length; i++){
                var imageUrl = response.data[i].images.fixed_height_still.url;
                console.log(imageUrl);
                console.log(response);


                var animalDiv = $("<div>")
                var animalImage = $("<img>");
                var rating = $("<p class='rating'>").text("Rating: " + response.data[i].rating);

                rating.addClass("rating-text");



                animalImage.attr("src", imageUrl);
                animalImage.attr("alt", "animal image");
                animalImage.addClass("image-gifs")
                animalImage.attr("data-state", "still");
                animalImage.attr("data-position", i);

                animalDiv.append(rating);
                animalDiv.append(animalImage);
                animalDiv.addClass("individual-gifs");
    

    
                $("#gifs").prepend(animalDiv);
    
            };
        });
    };
    


    $(document).on("click", ".animalBtn", dataPull);

	// ANIMATE GIFS

    function gifAnimation() {
      var state = $(this).attr("data-state");
      var position = $(this).attr("data-position"); //will return a string
      position = parseInt(position); //string to integer

      console.log(results[position].images.fixed_height.url);
      console.log(position);

      if (state === "still") {
        console.log("we're here");
        $(this).attr("src", results[position].images.fixed_height.url);
        $(this).attr("data-state", "animate");
      } else {
        $(this).attr("src", results[position].images.fixed_height_still.url);
        $(this).attr("data-state", "still");
      }
    };

  $(document).on("click", ".image-gifs", gifAnimation);

    
    
    
    
    
    
    
    });