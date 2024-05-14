CREATE DATABASE  IF NOT EXISTS companydb;

USE companydb;

CREATE TABLE empleados(
    id INT NOT NULL  AUTO_INCREMENT,
    nombre VARCHAR(45) DEFAULT NULL,
    salario INT,
    PRIMARY KEY(id)
)


INSERT INTO empleados VALUES
    (1, 'Joe', 1000),
    (2, 'Carlos', 2000),
    (3, 'Bea', 3000);