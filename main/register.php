<?php

$conn = mysqli_connect("localhost", "root", "", "User");

if( isset($_POST["register"])) {

    if( registrasi($_POST) > 0 ) {
        echo "<script> alert('User Telah Ditambahkan!')</script>";
    }else {
        echo mysqli_errno($conn)
    }
}



?>




<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="UTF-8">
    <title>Register</title>
    <link rel="stylesheet" href="css/register.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
   </head>
<body>
  <div class="container">
    <div class="title">Registrasi</div>
    <div class="content">
      <form action="#">
        <div class="user-details">
          <div class="input-box">
            <span class="details">Full Name</span>
            <input type="text" name="nama" placeholder="Enter your name" id="name" required>
          </div>
          <div class="input-box">
            <span class="details">Email</span>
            <input type="email" name="email" placeholder="Enter your email" id="email" required>
          </div>
          <div class="input-box">
            <span class="details">Password</span>
            <input type="text" name="password" placeholder="Enter your password" id="password" required>
          </div>
          <div class="input-box">
            <span class="details">Confirm Password</span>
            <input type="text" name="password2" placeholder="Confirm your password" id="password2" required>
          </div>
        </div>
        </div>
        <div class="button">
          <input type="submit" name="register">
        </div>
      </form>
    </div>
  </div>

</body>
</html>
