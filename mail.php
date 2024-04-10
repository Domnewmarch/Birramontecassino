<?php
// Check for form submission
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = strip_tags(trim($_POST["name"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $eventType = strip_tags(trim($_POST["event-type"]));
    $message = trim($_POST["message"]);

    // Specify the recipient email address
    $to = "dom@envydigital.co.uk"; // CHANGE THIS to your actual email address
    $subject = "Event Inquiry from $name";
    $body = "Name: $name\n";
    $body .= "Email: $email\n";
    $body .= "Event Type: $eventType\n\n";
    $body .= "Message:\n$message\n";

    // Headers
    $headers = "From: $name <$email>";

    // Send the email
    if (mail($to, $subject, $body, $headers)) {
        echo "Thank you for contacting us. We will get back to you soon!";
    } else {
        echo "Oops! Something went wrong and we couldn't send your message.";
    }
} else {
    // Not a POST request, redirect to the home page or display an error
    echo "There was a problem with your submission, please try again.";
}
?>