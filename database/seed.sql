

INSERT into users (name,email,password_hash) values ('sally','sally@example.com','sally');
INSERT into users (name,email,password_hash) values ('sam','sam@example.com','sam');
-- 

INSERT into plants (name,image,description,user_id) values ('Monstera deliciosa','https://images.pexels.com/photos/2090641/pexels-photo-2090641.jpeg','an indoor plant needing a lot of space and jailing from parts of southern Mexico.',1);
INSERT into plants (name,image,description,user_id) values ('Hoya Kerrii','https://media.istockphoto.com/photos/colorful-flowers-sweetheart-hoya-leaf-pot-ornamental-plant-or-hoya-picture-id1127518168?b=1&k=20&m=1127518168&s=612x612&w=0&h=G3yV3LrOCud09d22b9uArbLKMW4r0EC_HeyzFsN5M74=','a heart shapped leaf plant from southeast Asia',2);
INSERT INTO plants(name,image,description,user_id) values ('Hoya linearis','https://images.squarespace-cdn.com/content/v1/5bdc80984cde7aec2e94e22d/1610366612109-DKACGR4Z9OK5HM1X3PPK/IMG_7547.jpg?format=2500w','Distinctly unique with delicate foliage that is elongated, soft and slightly hairy.',2);
INSERT INTO plants(name,image,description,user_id) values ('Begonia mazae','https://quickbutik.imgix.net/14829R/products/62430256acb73.jpeg?auto=format','tear-shaped dark green leaves overlaid with a blackish pattern',1);
INSERT INTO plants(name,image,description,user_id) values ('Aglaonema ''stripes','https://i.etsystatic.com/10494852/r/il/88a04a/3093502645/il_300x300.3093502645_2v0r.jpg','Beautiful and easy to care for, with dark green leaves and white stripes.',2);




-- CARE: water:low-moderate, humidity : high , Light: bright indirect, soil: well-draining
insert into care(plant_id,water,humidity,soil,light) values (1,'moderate','medium','well-draining','bright indirect');
insert into care(plant_id,water,humidity,soil,light) values (2,'moderate','high','well-draining','bright indirect');

insert into care(plant_id,water,humidity,soil,light) values (2,'moderate','low','well-draining', 'bright indirect' );
insert into care(plant_id,water,humidity,soil,light) values (1,'moderate','medium-high','well-draining', 'bright indirect' );
insert into care(plant_id,water,humidity,soil,light) values (1,'moderate','medium','well-draining', 'low-moderate' );

