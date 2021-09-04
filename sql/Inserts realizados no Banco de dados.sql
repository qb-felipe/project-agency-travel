-- Insert into 
INSERT INTO packages 
    (name,description,days,price,city,state)
VALUES 
    ('Autumn Maddox','Nauru',5,3191,'Caucaia','Ceará'),
    ('Hiroko Knapp','Bulgaria',3,13408,'Bolsward','Fr'),
    ('Ishmael Mckinney','Moldova',5,5673,'Mülheim','NW'),
    ('Dara Ortega','Germany',8,8367,'San Martino in Badia/St. Martin in Thurn','TAA'),
    ('Clayton Snider','Saint Vincent and The Grenadines',2,9063,'Sahiwal','PU'),
    ('Holmes Curtis','Tunisia',10,14328,'Rulles','LX'),
    ('Gary Roach','South Georgia and The South Sandwich Islands',9,14879,'Trujillo','La Libertad'),
    ('Liberty Solomon','Curaçao',10,10781,'Chilliwack','BC'),('Jena Bray','Laos',13,8631,'Sete Lagoas','MG'),
    ('Mia Mcfarland','Heard Island and Mcdonald Islands',4,2987,'Veenendaal','Utrecht');


INSERT INTO "hotels" 
    (name,daily_voucher_price,address,postal_zip) 
VALUES 
    ('Candice Miller',679,'793-790 Orci. Rd.','69076'),
    ('Dominique Collier',441,'537-7108 Volutpat St.','60916'),
    ('Abra Stuart',781,'6705 Vel St.','30384'),
    ('Vernon Holland',68,'5281 Aenean Ave','68848'),
    ('Mufutau Landry',678,'P.O. Box 981, 6230 Cursus Avenue','39930'),
    ('Thomas Lang',911,'4535 Lectus, Ave','64654'),
    ('Francesca Keith',993,'Ap #423-5301 Quis, St.','141973'),
    ('Callum Byrd',188,'P.O. Box 887, 5169 Risus. Rd.','66933'),
    ('Carson Oneill',279,'P.O. Box 801, 3635 Viverra. St.','1987'),
    ('Mona Gray',544,'Ap #626-6587 Purus Rd.','21790');

INSERT INTO "users"
    (name,birth_date,address,cep,ddd,phone_number,register_datetime,login,senha)
VALUES 
    ('Gareth Fuller','2021/01/26','632-6411 Morbi Street','822926',7,'949208213',now(),'garethfuller','12345'),
    ('Emi Emerson','2021/09/17','5454 Duis Rd.','25530590',85,'955010169',now(),'emiemerson', '12345'),
    ('Ira Brady','2022/01/19','P.O. Box 322, 8431 Integer Avenue','37522',50,'907804975',now(),'irabrady', '12345'),
    ('Robert Klein','2021/07/14','875-2246 Sociis Rd.','76379',27,'944817894',now(),'robertklein', '12345'),
    ('Moana Stephenson','2022/04/13','624-9654 Felis. St.','8811251591',76,'921570285',now(),'moanastephenson', '12345'),
    ('Magee Chase','2022/04/01','528-2732 Risus, St.','914542',23,'973841764',now(),'mageechase', '54321'),
    ('Deirdre Logan','2021/12/19','Ap #249-3296 Scelerisque Av.','1002',50,'950658236',now(),'logan', '54321'),
    ('Josephine Goodman','2021/07/23','216 Enim Rd.','Z8902',67,'922791135',now(),'josegoodman', '54321'),
    ('Rahim Barr','2021/06/26','503-3661 Eu Rd.','672393',98,'916072662',now(),'rahimbarr', '54321'),
    ('Sarah Padilla','2021/02/02','812-9213 Luctus St.','30614',97,'912398676',now(),'sarahpadilla', '0000');


INSERT INTO "daily_voucher"
	(id_package, id_hotel, quantity, price)
VALUES
	(1,11, 1, 1000),
	(2,6, 1, 200),
	(3,2, 1, 50);

SELECT * FROM packages;
SELECT * FROM hotels;