<?php


if (isset($_GET['message'])) {
    $message = $_GET['message'];  
}

?>

<!DOCTYPE html>
<html>
<head>
    <title>Success</title>
</head>
<body>

<h2><?php echo $message = 'Registered Succesfully'; ?></h2> 

<p><a href="../Register/index.php">Go back to the Registration Form</a></p> 
</body>
</html>
