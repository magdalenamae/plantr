DROP TABLE if EXISTS care;
DROP TABLE IF EXISTS plants;
DROP Table if EXISTS users;
DROP Table if EXISTS greenhouse;

create table users (
    id serial PRIMARY KEY,
    name VARCHAR(255),
    email text UNIQUE,
    password_hash VARCHAR(255)  
);

create table plants (
    id serial PRIMARY KEY,
    name VARCHAR(255),
    image VARCHAR(255),
    description TEXT 
);

create table greenhouse (
    id serial PRIMARY KEY,
    name VARCHAR(255),
    plant_id integer REFERENCES plants(id), 
    user_id integer REFERENCES users(id) 
);

create table care (
    plant_id integer REFERENCES plants(id),
    care_id serial PRIMARY KEY,
    water text,
    humidity text,
    soil text,
    light text,
    FOREIGN KEY(plant_id) 
		REFERENCES plants(id)
);
 
