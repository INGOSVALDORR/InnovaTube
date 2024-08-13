use inovatube;

CREATE TABLE usuarios
(
IdUsuario int primary key not null,
correo varchar(120),
nombre varchar(120),
usuario varchar(50),
contraseña varchar(50)
);
CREATE TABLE VideosFavoritos(
IdVideoFav int primary key not null,
url varchar(200)
);

CREATE TABLE detalleVU(
iddetalleVU int primary key not null,
idUsuario int not null,
idVideoFav int not null

);
