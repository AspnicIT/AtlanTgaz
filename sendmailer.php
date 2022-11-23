<?php
//Import PHPMailer classes into the global namespace
//These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

//Load Composer's autoloader
require 'vendor/autoload.php';

//Create an instance; passing `true` enables exceptions
$mail = new PHPMailer(true);
$mail->CharSet = 'UTF-8';
$mail->setLanguage('ru', 'phpmailer/language/');
%mail->IsHTML(true);

try {
    //Recipients
    $mail->setFrom('from@gaz.com', 'mr.Test');
    $mail->addAddress('as06p92@mail.ru');     //Add a recipient
    // $mail->addAddress('ellen@example.com');               //Name is optional
    // $mail->addReplyTo('info@example.com', 'Information');
    // $mail->addCC('cc@example.com');
    // $mail->addBCC('bcc@example.com');

    //Attachments
    // $mail->addAttachment('/var/tmp/file.tar.gz');         //Add attachments
    // $mail->addAttachment('/tmp/image.jpg', 'new.jpg');    //Optional name

    $body = '
    <h1>Письмо с сайта Gaz</h1>
    <p><strong>Имя:</strong>'$_POST['name']'</p>
    <p><strong>Телефон:</strong>'$_POST['phone']'</p>   
    <p><strong>Сообщение:</strong>'$_POST['question']'</p>      
    '

    //Content
    $mail->isHTML(true);                                  //Set email format to HTML
    // $mail->Subject = 'Here is the subject';
    $mail->Body = $body;
    // $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

    $mail->send();
    echo 'Message has been sent';
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}

header('Content-type: aplication/json');
echo json_encode($response);
?>