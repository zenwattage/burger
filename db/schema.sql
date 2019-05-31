/*
* Create the `burgers_db`.
   * Switch to or use the `burgers_db`.
   * Create a `burgers` table with these fields:
     * **id**: an auto incrementing int that serves as the primary key.
     * **burger_name**: a string.
     * **devoured**: a boolean.
*/

DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE table burgers (
  id int NOT NULL AUTO_INCREMENT,
  burger_name VARCHAR(255),
  devoured BOOLEAN default false,
  PRIMARY KEY(id)

);

