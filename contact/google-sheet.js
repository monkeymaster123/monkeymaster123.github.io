var request;

$("#contact").submit(function(event){

    if (request) {request.abort();}

    var $form = $(this);
    
    var $inputs = $form.find("input, select, button, textarea");

    var serializedData = $form.serialize();
    
    request = $.ajax({
        url: "https://hooks.zapier.com/hooks/catch/2245471/9hmndp/",
        type: "post",
        data: serializedData
    });

    request.done(function (response, textStatus, jqXHR){
        console.log(response);
        window.location = 'thanks.html';
    });
    
    request.fail(function (jqXHR, textStatus, errorThrown){
        console.error("The following error occurred: " + textStatus, errorThrown);
    });

    request.always(function () {
        $inputs.prop("disabled", false);
    });

    event.preventDefault();
});