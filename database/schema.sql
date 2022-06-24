DROP TABLE IF EXISTS care Cascade;
DROP TABLE IF EXISTS plants Cascade;
DROP TABLE IF EXISTS users Cascade;
DROP TABLE IF EXISTS greenhouse Cascade;

CREATE TABLE users (
    id serial PRIMARY KEY,
    name VARCHAR(255),
    email text UNIQUE,
    password_hash VARCHAR(255)  
);

CREATE TABLE plants (
    id serial PRIMARY KEY,
    name VARCHAR(255),
    image VARCHAR(255),
    description text 
);

CREATE TABLE greenhouse (
    id serial PRIMARY KEY,
    name VARCHAR(255),
    plant_id integer REFERENCES plants(id), 
    user_id integer REFERENCES users(id) 
);

CREATE TABLE care (
    plant_id integer REFERENCES plants(id),
    care_id serial PRIMARY KEY,
    water text,
    humidity text,
    soil text,
    light text,
    FOREIGN KEY(plant_id) 
		REFERENCES plants(id)
);
 
