var topics = ["Chowder", "Adventure Time", "Regular Show"];



// iterates through array and creates buttons for each.
for (var i = 0; i < topics.length; i++) {
    $(".container").append("<button data-show=" + topics[i] + ">" + topics[i] + "</button>");
}

$(".container").append($("<div id='gifdiv'>"));

// click event that initiates request to API
$("button").click(function () {
    var show = $(this).attr("data-show");
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + show + "&api_key=kW9sQ9OUs0tX14I9S6vmi6kXenh8dyx4&limit=10";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        // Displays requested information
        var results = response.data;
        for (var j = 0; j < results.length; j++) {
            rating = $("<div/>").text("Rating: " + results[j].rating);
            $("#gifdiv").append(rating);

            var image = $("<img id='animate'>");
            image.attr("src", results[j].images.fixed_height_still.url);
            $("#gifdiv").append(image);

            $('#animate').click(function () {
                image.attr("src", results[j].images.fixed_height.url);
            })



        }



        // Need to make gifs static and animate on click as well as add form elements to take input and push into array
    })
})