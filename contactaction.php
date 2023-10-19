<?php
 $fname=$_POST["firstname"];
 $lname=$_POST["lastname"];
 $mail=$_POST["email"];
 $message=$_POST["message"];
 $phone=$_POST["phone"];

 
 $to = "sales@sproutgroup.in";
 $subject = "Mail From" . $mail ;

 $txt = "Name: " . $fname . " " . $lname . "\r\nPhone: " . $phone . "\r\nMail id: " . $mail ."\r\nMessage: " . $message;

 $headers = "From:" . $mail . "\r\n";

 if($mail!=NULL && $name!=NULL && $message!=NULL)
    { //mail($to,$subject,$txt,$headers);
     mail($to,$subject,$txt,$headers);
     echo "<script>alert('Thank you for getting in touch! ');</script>";
     echo "<script>document.location.href='contact.html'</script>";
    }
    else{
        echo "<script>alert('Mail was not sent. Please try again later');</script>";
        echo "<script>document.location.href='contact.html'</script>";
    }
?>