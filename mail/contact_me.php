<?php
// Check for empty fields
if(empty($_POST['email']) || !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL)) {
	echo "No arguments Provided!";
	return false;
}

$name = $_POST['name'];
$email_address = $_POST['email'];
$message = $_POST['message'];

// Send an email to us
$to = 'info@artsitoya.com'; // Add your email address inbetween the '' replacing yourname@yourdomain.com - This is where the form will send a message to.
// $to = 'residence@studiokura.com'; // For testing
$email_subject = "Arts Itoya Contact Form:  $name";
$email_body = "Arts Itoya has received a new message from the contact form.\n\n"."Here are the details:\n\nName: $name\n\nEmail: $email_address\n\nMessage:\n$message";
$headers = "From: noreply@artsitoya.com\n"; // This is the email address the generated message will be from. We recommend using something like noreply@yourdomain.com.
$headers .= "Reply-To: $email_address";
mail($to,$email_subject,$email_body,$headers);

// Send an email to the sender
$to = $email_address;
$email_subject = "Thank you for contacting Arts Itoya";
$email_body = "Arts Itoya has received your message and will reply soon.\n\n"."Here is your message for your reference:\n\nName: $name\n\nEmail: $email_address\n\nMessage:\n$message";
$headers = "From: noreply@artsitoya.com\n"; // This is the email address the generated message will be from. We recommend using something like noreply@yourdomain.com.
$headers .= "Reply-To: noreply@artsitoya.com";
mail($to,$email_subject,$email_body,$headers);

header('Location: /');
return true;
?>
