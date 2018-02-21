$(function() {

    $(".applyfield").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function($form, event, errors) {
            // additional error messages or events
        },
        submitSuccess: function($form, event) {
            event.preventDefault(); // prevent default submit behaviour
            // get values from FORM
            var name = $("input#apply_name").val();
            var email = $("input#apply_email").val();
            var web = $("input#apply_web").val();
            var month = $("input#apply_month").val();
            var statement = $("textarea#apply_statement").val();
            var cv = $("textarea#apply_cv").val();
            var message = $("textarea#apply_message").val();
            var firstName = name; // For Success/Failure Message
            // Check for white space in name for Success/Fail message
            if (firstName.indexOf(' ') >= 0) {
                firstName = name.split(' ').slice(0, -1).join(' ');
            }
            $.ajax({
                url: "././mail/apply.php",
                type: "POST",
                data: {
                    name: name,
                    email: email,
                    web: web,
                    month: month,
                    statement: statement,
                    cv: cv,
                    message: message
                },
                cache: false,
                success: function() {
                    // Success message
                    $('#apply_success').html("<div class='alert alert-success'>");
                    $('#apply_success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#apply_success > .alert-success')
                        .append("<strong>Your message has been sent. </strong>");
                    $('#apply_success > .alert-success')
                        .append('</div>');

                    //clear all fields
                    $('#applyForm').trigger("reset");
                },
                error: function() {
                    // Fail message
                    $('#apply_success').html("<div class='alert alert-danger'>");
                    $('#apply_success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#apply_success > .alert-danger').append("<strong>Sorry " + firstName + ", it seems that my mail server is not responding. Please try again later!");
                    $('#apply_success > .alert-danger').append('</div>');
                    //clear all fields
                    $('#applyForm').trigger("reset");
                },
            })
        },
        filter: function() {
            return $(this).is(":visible");
        },
    });

    $("a[data-toggle=\"tab\"]").click(function(e) {
        e.preventDefault();
        $(this).tab("show");
    });
});


/*When clicking on Full hide fail/success boxes */
$('#apply_name').focus(function() {
    $('#apply_success').html('');
});
