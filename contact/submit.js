var request;
var request2;
var responses = [];

$("#contact").submit(function(event) {

    if (request) { request.abort(); }

    if (request2) { request2.abort(); }

    var $form = $(this);

    var $inputs = $form.find("input, select, button, textarea");

    var serializedData = $form.serialize();

    var urls = ['https://hooks.zapier.com/hooks/catch/2245471/9hmndp/', 'https://hooks.zapier.com/hooks/catch/2245471/5ez2g5/'];

    $.each(urls, function(i, u) {
        $.ajax(u, {
            type: 'POST',
            data: serializedData,
            success: function(data) {
                responses[i]="success";
                // alert(responses[i]);
                // alert(u);
            }
        });
    });

    // if (responses[0] == "success" && responses[1] == "success") {
    //     console.log(response);
    //     window.location = 'thanks.html';
        
    // } else {
        window.location = 'thanks.html';
    // }
    $inputs.prop("disabled", false);


    // request = $.ajax({
    //     url: "https://hooks.zapier.com/hooks/catch/2245471/90oun0/",
    //     type: "post",
    //     data: serializedData
    // });

    // request2 = $.ajax({
    //     url: "https://hooks.zapier.com/hooks/catch/2245471/5ez2g5/",
    //     type: "post",
    //     data: serializedData
    // });

    // request.done(done(response, textStatus, jqXHR));

    // request2.done(done(response, textStatus, jqXHR));

    // request.fail(function(jqXHR, textStatus, errorThrown) {
    //     console.error("The following error occurred: " + textStatus, errorThrown);
    // });

    // request2.fail(function(jqXHR, textStatus, errorThrown) {
    //     console.error("The following error occurred: " + textStatus, errorThrown);
    // });

    // request.always(function() {
    //     $inputs.prop("disabled", false);
    // });

    // request2.always(function() {
    //     $inputs.prop("disabled", false);
    // });


    // function done(response, textStatus, jqXHR) {
    //     if (request.done || request2.done) {
    //         console.log(response);
    //         window.location = 'thanks.html';
    //     }
    // }

    event.preventDefault();
});