<!DOCTYPE html>
<html>

<?php
session_start();
?>


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



</head>


<style>
    #relax {
        background-color: white;
        height: 200px;
    }

    #txt {
        margin: auto;
        font-size: 180px;
        font-family: cursive;
    }

    
</style>

<body Style="background-color: dodgerblue">


    <div id="relax">

        <center>
            <h1 id="txt"> Relaxation App</h1>
        </center>
    </div>

<br>


    <div Style="background-color: blue">



    </div>
<br>
<center>
 <p Style = "color: white; font-family: cursive; font-size:30px;">   Please Choose One Of The Options To Interact With: </p>
</center>
    <br>
    <br>
    <br>  

    <a href = "../colorchanger/colorchanger.html">
    <img src="color.png" height="150" Style="margin-left: 200px; border: solid black 2px">
    </a>

    <a href = "../slinky/slinky.html">
    <img src="slinky.png" height="150px" Style="margin-left: 200px; border: solid black 2px;">

    </a>


    <a href = "../particle/particle.html">
    <img src="particle.png" height="150px" Style="margin-left: 200px; border: solid black 2px">
</a>


    <br>
    <br>
 


<br> <br> <br> <br>

</body>



</html>