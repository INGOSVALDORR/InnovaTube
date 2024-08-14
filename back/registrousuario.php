<?php
ini_set('display_errors', '1');
ini_set('display_startup_errors', '1');
error_reporting(E_ALL);
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: http://localhost:4200"); // Permite solicitudes desde cualquier origen
header("Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Authorization");





if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit();
}

$conn = new mysqli("localhost","root","","inovatube");

if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}$method = $_SERVER['REQUEST_METHOD'];

switch ($method) {
    case 'POST':
      
        $input = json_decode(file_get_contents("php://input"), true);
        $nombre = $input['nombre'];
        $correo = $input['correo'];
        $usuario = $input['usuario'];
        $contrasena = $input['contrasena'];

      
        $contrasena_hash = password_hash($contrasena, PASSWORD_DEFAULT);

        $sql = "INSERT INTO usuarios (nombre, correo, usuario, contraseña) VALUES ('$nombre', '$correo', '$usuario', '$contrasena_hash')";

        if ($conn->query($sql) === TRUE) {
            echo json_encode(["message" => "Nuevo registro creado"]);
        } else {
            echo json_encode(["error" => $conn->error]);
        }
        break;

    default:
        echo json_encode(["error" => "Método no permitido"]);
        break;
}

$conn->close();

