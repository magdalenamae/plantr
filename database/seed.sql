

INSERT into users (name,email,password_hash) values ('sally','sally@example.com','sally');
INSERT into users (name,email,password_hash) values ('sam','sam@example.com','sam');
-- 

INSERT into plants (name,image,description,user_id) values ('Monstera deliciosa','https://images.pexels.com/photos/2090641/pexels-photo-2090641.jpeg','an indoor plant needing a lot of space and jailing from parts of southern Mexico.',1);
INSERT into plants (name,image,description,user_id) values ('Hoya Kerrii','https://media.istockphoto.com/photos/colorful-flowers-sweetheart-hoya-leaf-pot-ornamental-plant-or-hoya-picture-id1127518168?b=1&k=20&m=1127518168&s=612x612&w=0&h=G3yV3LrOCud09d22b9uArbLKMW4r0EC_HeyzFsN5M74=','a heart shapped leaf plant from southeast Asia',2);

-- CARE: water:low-moderate, humidity : high , Light: bright indirect, soil: well-draining
insert into care(plant_id,water,humidity,soil,light) values (1,'moderate','medium','well-draining','bright indirect');
insert into care(plant_id,water,humidity,soil,light) values (2,'moderate','high','well-draining','bright indirect');

