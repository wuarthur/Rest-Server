var myJSON;

$(function () {
    var url = $(location).attr('href');
    $("#submit").click(function () {
        alert('button clicked');
        $.ajax({
            type: 'GET',
            url: "https://graph.facebook.com/10150232496792613/?callback=?",
            async: false,
            jsonpCallback: 'myJSON',
            contentType: "application/json",
            //Any post-data/get-data parameters
            //This is optional
            dataType: "jsonp",

            success: function(json) {
                console.dir(json.sites);
            },
            error: function(e) {
                console.log(e.message);
            }





            //The response from the server

        });


        console.write(myJSON);
        alert('button clicked end');
    });
});