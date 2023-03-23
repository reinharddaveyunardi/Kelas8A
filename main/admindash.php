<?php
require 'function.php';

$murid = query("SELECT * FROM murid");

?>

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link href='https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css' rel='stylesheet'>
	<link rel="stylesheet" href="css/admindash.css">
	<title>Dashboard</title>
</head>
<body>
	<section id="sidebar">
		<a href="#" class="brand">
			<span class="text" style="position: relative; left: 30px;">Hi Admin!</span>
		</a>
		<ul class="side-menu top">
			<li class="active">
				<a href="#">
					<i class='bx bxs-dashboard' ></i>
					<span class="text">Dashboard</span>
				</a>
			</li>
			<li>
				<a href="#" class="logout">
					<i class='bx bxs-log-out-circle' ></i>
					<span class="text">Logout</span>
				</a>
			</li>
		</ul>
	</section>
	<section id="content">
		<nav>
			<a href="#" class="profile">
				<img src="img/pp-grup.png">
			</a>
		</nav>
		<main>
			<div class="head-title">
				<div class="left">
					<h1>Dashboard</h1>
					<ul class="breadcrumb">
						<li>
							<a href="#">Dashboard</a>
						</li>
						<li><i class='bx bx-chevron-right' ></i></li>
						<li>
							<a class="active" href="#">Home</a>
						</li>
					</ul>
				</div>
			</div>

			<ul class="box-info">
				<li>
					<span class="text">
						<h3>27.88K</h3>
						<p>Request</p>
					</span>
				</li>
				<li>
					<span class="text">
						<h3>3.8K</h3>
						<p>Visits</p>
					</span>
				</li>
				<li>
					<span class="text">
						<h3>5.8K</h3>
						<p>Page Visit</p>
					</span>
				</li>
			</ul>


			<div class="table-data">
				<div class="order">
					<div class="head">
						<h3>Student</h3>
						<i class='bx bx-search' ></i>
						<i class='bx bx-filter' ></i>
					</div>
					<table>
						<thead>
							<tr>
								<th>Name</th>
								<th>Email</th>
								<th>ID</th>
								<th>Password</th>
							</tr>
						</thead>
						<body>
							<tr>
								<?php
								$i = 1;
								foreach( $murid as $row) :

								
								?>
							</tr>
							<tr>
								<td>
									<img src="img/student/<?= $row["gambar"];?>" alt="">
									<p><?= $row["nama"];?></p>
								</td>
								<td><?= $row["email"];?></td>
								<td><?= $row["id"];?></td>
								<td><?= $row["password"];?></td>
							</tr>
								<?php endforeach; ?>
						</body>
					</table>
				</div>
			</div>
		</main>
	</section>
	<script src="script.js"></script>
</body>
</html>