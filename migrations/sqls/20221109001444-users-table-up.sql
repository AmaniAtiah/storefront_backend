/* Replace with your SQL commands */

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    email VARCHAR (50) UNIQUE,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    password VARCHAR
 
)