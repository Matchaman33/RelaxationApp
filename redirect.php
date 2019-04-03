<!DOCTYPE html>
<html>



<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Page Title</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!--BootStrap CDN-->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
        integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"
        integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy"
        crossorigin="anonymous"></script>
    <!--END BOOTSTRAP-->

<div id = "header" Style = "height: 200px; background-color: dodgerblue"> 
<center> 
<h1 Style = "font-size: 160px; font-family: cursive"> Relaxation App </h1>
</center>
</div>

</head>


<br> <br> <br> 



    <!--PHP  -------------------------------------------->
  <?php

$Relaxation = $_POST["relaxation"];
$Name = $_POST["name"];
 
echo ("<p style = 'color:red;text-align:center;font-family:cursive;font-size:45px;'> Hello $Name! </p>");
echo ("<br> <br>");
echo ("<p style = 'color:red;text-align:center;font-family:cursive;font-size:45px;'> Since you like to relax by $Relaxation, </p>");


echo ("<br> <br>");
echo ("<p style = 'color:red;text-align:center;font-family:cursive;font-size:45px;'> Here are some satisfying illusions to look at and interact with: </p>");
  
echo "<meta http-equiv=\"refresh\" content=\"8;url=/landing/landing.php\"/>";

  ?>
<!--END OF PHP ------------------>






</html>