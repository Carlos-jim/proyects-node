CREATE DATABASE  IF NOT EXISTS companydb;

USE companydb;

CREATE TABLE empleados(
    id INT NOT NULL  AUTO_INCREMENT,
    nombre VARCHAR(45) DEFAULT NULL,
    salario INT,
    PRIMARY KEY(id)
)
