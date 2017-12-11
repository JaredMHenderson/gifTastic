var topics = ['Steve Carrel', 'Tom Hanks', 'Steve Martin', 'Tim Allan', 'Robin Williams', 'Chris Pratt', 'Jim Carrey', 'Conan Obrien', 'Kristin Wig',
              'Jimmy Fallon', 'Betty White', 'Will Ferrell', 'Tiny Fey', 'Adam Sandler', 'Amy Poehler'];


for(var i=0; i<topics.length; i++){
    $('#button-holder').append(`<button type="button" class="btn btn-default" id="celeb-button">${topics[i]}</button>`);
};



var apiKey = 'pZJltcsxr6vcCEcLjE4YOZPAdJeBeWS3';
var queryUrl = `http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=${apiKey}&limit=5`;



$.ajax({
    url: queryUrl,
    method: 'GET',
})
.done(function(response) {
    console.log(response);
})
.fail(function() {
    console.log("error");
})
.always(function() {
    console.log("complete");
});
