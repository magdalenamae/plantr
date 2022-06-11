DROP TABLE IF EXISTS plants;
DROP Table if EXISTS users;
DROP TABLE if EXISTS care;

create table users (
    id serial PRIMARY KEY ,

    name VARCHAR(255),
    email text UNIQUE,
    password_hash VARCHAR(255)
   
)

create table plants (
    id serial PRIMARY KEY,
    name VARCHAR(255),
    image VARCHAR(255),
    description VARCHAR(255),
    user_id integer REFERENCES users(id)
    
)
create table care (
    plant_id reference,
    care_id serial PRIMARY KEY
    water text,
    humidity text,
    soil text,
    light text,
    FOREIGN KEY(plant_id) 
		REFERENCES plants(id)
)
 
