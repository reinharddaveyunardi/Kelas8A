<?php
require 'function.php';

if( isset($_POST["login"]) ) {


    $email = $_POST["email"];
    $password = $_POST["password"];

    $result = mysqli_query($conn, "SELECT * FROM user WHERE 
    email ='$email'");


    if( mysqli_num_rows($result) === 1) {

        $row = mysqli_fetch_assoc($result);
        if (password_verify($password, $row["password"]) ) {
            header("Location: admindash.php");
            exit;
        }
    }


}

?>




<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="shortcut icon" src="img/pp-grup.png">
  <link rel="stylesheet" href="css/login.css">
  <title>Masuk</title>
</head>
<body>
    <section>
        <div class="form-box">
            <div class="form-value">
                <form action="">
                    <h2>Masuk</h2>
                    <div class="inputbox">
                        <ion-icon name="mail-outline"></ion-icon>
                        <input type="email" required name="email" id="email">
                        <label for="email">Masukan Email</label>
                    </div>
                    <div class="inputbox">
                        <ion-icon name="lock-closed-outline"></ion-icon>
                        <input type="password" required name="password" id="password">
                        <label for="password">Masukan Password</label>
                    </div>
                    <div class="forget">
                        <label for=""><input type="checkbox">Ingkatkan Sesi Login Saya <a href="#">Lupa Password</a></label>
                    </div>
                    <button type="submit" name="login">Masuk</button>
                    <div class="register">
                        <p>Belum Punya Akun? <a href="register.php">Register Sekarang!</a></p>
                    </div>
                </form>
            </div>
        </div>
    </section>
    <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
</body>
</html>