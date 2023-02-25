<!DOCTYPE html>
<html>
<head>
	<title>Masuk</title>
	<link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
     <form action="login.php" method="post">
     	<h2>Masuk</h2>
     	<?php if (isset($_GET['error'])) { ?>
     		<p class="error"><?php echo $_GET['error']; ?></p>
     	<?php } ?>
     	<label>Nama Pengguna</label>
     	<input type="text" name="uname" placeholder="Nama Kamu"><br>

     	<label>Password</label>
     	<input type="password" name="password" placeholder="Buatlah Password"><br>

     	<button type="submit">Masuk</button>
          <p>Belum Punya Akun?<a href="signup.php" class="ca">Buat Akun</a></p>
     </form>
</body>
</html>