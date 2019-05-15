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
            // gave image attr of still image
            var image = $("<img>");
            image.attr("src", results[j].images.fixed_height_still.url);
            image.attr("data-animate", results[j].images.fixed_height.url);
            image.attr("data-still", results[j].images.fixed_height_still.url);
            image.addClass("gif")
            $("#gifdiv").append(image);
            // need to make it so when image is clicked it is animated
            $(".gif").on("click", function () {
                var state = $(this).attr("data-state");
                if (state === "still") {
                    $(this).attr("src", $(this).attr("data-animate"));
                    $(this).attr("data-state", "animate");
                } else {
                    $(this).attr("src", $(this).attr("data-still"));
                    $(this).attr("data-state", "still");
                }
            });



        }
        // add form elements to take input and push into array

    })
})