var topics = ["Chowder", "Adventure Time", "Regular Show"];


// iterates through array and creates buttons for each.
function renderButtons() {
    $(".button-area").empty();

    for (var i = 0; i < topics.length; i++) {
        var btns = $('<button>');
        btns.addClass('press');
        btns.attr('data-show', topics[i]);
        btns.text(topics[i]);
        $('.button-area').append(btns);
    }
}
// This function handles events where the add topic button is clicked
$("#go-button").click(function (event) {
    event.preventDefault();

    var input = $("#search-term").val().trim();

    topics.push(input);
    renderButtons();
})

renderButtons();



// click event that initiates request to API
$(document.body).on("click", ".press", function () {
    // $(document.body).on("click", ".checkbox", function()
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
            $(".container").prepend($("<div id='gifdiv'>"));
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
    })

})