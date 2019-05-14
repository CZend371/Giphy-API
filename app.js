var topics = ["Chowder", "Adventure Time", "Regular Show"];

var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + topics[i] + "&api_key=kW9sQ9OUs0tX14I9S6vmi6kXenh8dyx4";

$('<button/>').text("Chowder");
$('button').attr('data', show);


$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {

})