--BURGERS DB-- 

create database burgers_db;
use burgers_db;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);

-- INSERT INTO burgers (burger_name, devoured) VALUES ("Sushi Burger", false);
-- INSERT INTO burgers (burger_name, devoured) VALUES ("Korean BBQ Burger", false);
-- INSERT INTO burgers (burger_name, devoured) VALUES ("Pork Burger", false);