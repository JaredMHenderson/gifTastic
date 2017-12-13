var topics = ['Michael Scott', 'Dwight Schrute', 'Jim Halpert', 'Pam Beasley', 'Kevin Malone', 'Kelly Kapoor', 'Ryan Howard', 'Creed Bratton', 'Deangelo Vickers',
              'Bob Vance', 'Phyllis Vance', 'Stanley Hudson', 'Toby Flenderson', 'Oscar Martinez', 'Meredith Palmer'];


for(var i=0; i<topics.length; i++){
    $('#button-holder').append(`<button type="button" class="btn btn-default celeb-button" data-name = "${topics[i]}">${topics[i]}</button>`);
};

$(document).on('click', ".celeb-button",function(){



    $('#gif-holder').empty();

    var celebName = $(this).attr("data-name");
    var apiKey    = 'pZJltcsxr6vcCEcLjE4YOZPAdJeBeWS3';
    var queryUrl  = `https://api.giphy.com/v1/gifs/search?q=${celebName}&api_key=${apiKey}&limit=10`;



$.ajax({
    url: queryUrl,
    method: "GET"
})
.done(function(response) {
    console.log(queryUrl);
    console.log(response);
    var results = response.data;

    console.log(response.data[0].images.fixed_height.url);

    for(let i = 0; i < 10; i++){
    $('#gif-holder').append(`<img class="giphImage" src = "${response.data[i].images.fixed_height_still.url}"
        data-still   = "${response.data[i].images.fixed_height_still.url}"
        data-animate = "${response.data[i].images.fixed_height.url}" data-state="still" style="height: 45%; width: 45%">`)
        console.log(response);
    };

    $('.giphImage').on("click", function() {
      // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
      var state = $(this).attr("data-state");
      console.log($(this).attr("data-state"));
      // If the clicked image's state is still, update its src attribute to what its data-animate value is.
      // Then, set the image's data-state to animate
      // Else set src to the data-still value
      if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
      } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
      }
    });

})
.fail(function() {
    console.log("error");
})
.always(function() {
    console.log("complete");
});

});

$('#addComedian').on('click', function(){
    event.preventDefault();

    var newComedian = $('#input').val();
    $('#button-holder').append(`<button type="button" class="btn btn-default celeb-button" data-name = "${newComedian}">${newComedian}</button>`);
    $('#input').val('');

});




