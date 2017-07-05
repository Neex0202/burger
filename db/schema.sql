DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
id INTEGER(11)AUTO_INCREMENT NOT NULL,
burger_name VARCHAR(100) NULL,
devoured BOOLEAN NOT NULL DEFAULT 0,
date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
date_changed TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

