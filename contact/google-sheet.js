// Variable to hold request
var request;
var slack;
var email;

// Bind to the submit event of our form
$("#contact").submit(function(event){

    // Abort any pending request
    if (request) {
        request.abort();
    }
    // setup some local variables
    var $form = $(this);
    
    // Let's select and cache all the fields
    var $inputs = $form.find("input, select, button, textarea");

    // Serialize the data in the form
    var serializedData = $form.serialize();

    // Let's disable the inputs for the duration of the Ajax request.
    // Note: we disable elements AFTER the form data has been serialized.
    // Disabled form elements will not be serialized.
    $inputs.prop("disabled", true);
    

    // Fire off the request to /form.php
    
    
    
    // var url = "https://hooks.slack.com/services/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";
    slack = $.ajax({
        data: 'payload=' + JSON.stringify({
          	"fallback": "New Form Submission--Dalton Craven",
          	
        	"pretext": "New Form Submission!",
        	"color": "#36a64f",
        	"fields": [
        		{
        			"title": "Full Name",
        			"value": "Dalton Craven",
        			"short": true
        		},
        		{
        			"title": "Email",
        			"value": "20dalton00@gmail.com",
        			"short": true
        		},
        		{
        			"title": "Subject",
        			"value": "Hiring You",
        			"short": false
        		},
        		{
        			"title": "Message",
        			"value": "I'd like to hire you. I think that you're super cool and you're great",
        			"short": true
        		}
        	]
            
        }),
        dataType: 'json',
        processData: false,
        type: 'POST',
        url: "https://hooks.slack.com/services/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"
    });
    
    request = $.ajax({
        url: "https://script.google.com/macros/s/AKfycbx57dI3ifzS_YrCcwjLOJr3HVfkleLsXc6-_gjn72k57xZsOxD3/exec",
        type: "post",
        data: serializedData
    });

    // Callback handler that will be called on success
    request.done(function (response, textStatus, jqXHR){
        // Log a message to the console
        console.log("Hooray, it worked!");
        console.log(response);
        console.log(textStatus);
        console.log(jqXHR);
        window.location = 'thanks.html';
        
        
        
    });

    // Callback handler that will be called on failure
    request.fail(function (jqXHR, textStatus, errorThrown){
        // Log the error to the console
        console.error(
            "The following error occurred: "+
            textStatus, errorThrown
        );
    });

    // Callback handler that will be called regardless
    // if the request failed or succeeded
    request.always(function () {
        // Reenable the inputs
        $inputs.prop("disabled", false);
    });

    // Prevent default posting of form
    event.preventDefault();
});