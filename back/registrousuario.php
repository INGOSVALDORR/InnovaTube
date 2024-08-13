<?php
ini_set('display_errors', '1');
ini_set('display_startup_errors', '1');
error_reporting(E_ALL);

$nombre =$_POST['nombre'];
$correo =$_POST['correo'];
$usuario = $_POST['usuario'];
$contrasena = $_POST['contrasena'];
$conexion = new mysqli("localhost","root","","inovatube");
$sql = "INSERT INTO usuarios(correo,nombre,usuario,contrasena) VALUES ('$correo','$nombre','$usuario','$contrasena')";
$resultado = $conexion->query ($sql);

if($resultado){
	echo "registro exitoso";
	echo"<br><br>";
	echo"<a href='formulario_salon.php'>regresar a registro </a>";
	echo"<br><br>";
	echo"<a href='listado_salon.php'>ir al listado de salones </a>";
}else{
	echo "hubo un error:".$conexion->error;
}