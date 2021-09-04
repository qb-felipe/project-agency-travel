CREATE TABLE public.users (
	"id" serial NOT NULL,
	"name" VARCHAR(250) NOT NULL,
	"bith_date" DATE(250) NOT NULL,
	"address" varchar(150) NOT NULL,
	"cep" varchar(9) NOT NULL,
	"ddd" integer NOT NULL,
	"phone_number" integer NOT NULL,
	"register_datetime" TIMESTAMP default now() NOT NULL,
	"login" varchar(30) NOT NULL,
	"senha" varchar(20) NOT NULL,
	CONSTRAINT "users_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE public.reservations (
	"id" serial NOT NULL,
	"id_package" integer NOT NULL,
	"id_client" integer NOT NULL,
	"id_travel_agent" FLOAT(5) NOT NULL,
	"destiny" varchar(80) NOT NULL,
	"register_time" TIMESTAMP default now() NOT NULL,
	"price" FLOAT(5) NOT NULL,
	"quantity" integer NOT NULL,
	"start" TIMESTAMP NOT NULL,
	"end" TIMESTAMP NOT NULL,
	CONSTRAINT "reservations_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE public.packages (
	"id" serial NOT NULL,
	"name" varchar(150) NOT NULL,
	"description" varchar(300) NOT NULL,
	"days" integer NOT NULL,
	"price" FLOAT(3) NOT NULL,
	"city" varchar(40) NOT NULL,
	"state" varchar(30) NOT NULL,
	CONSTRAINT "packages_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE public.clients (
	"id_client" integer NOT NULL,
	"packages_bought" integer NOT NULL,
	"credit_card_number" integer NOT NULL
) WITH (
  OIDS=FALSE
);



CREATE TABLE public.employees (
	"id_employees" integer NOT NULL,
	"level_access" integer NOT NULL,
	"number_sales" integer NOT NULL,
	"kickback" FLOAT(5) NOT NULL
) WITH (
  OIDS=FALSE
);



CREATE TABLE public.hotels (
	"id" serial NOT NULL,
	"id_hotel" integer NOT NULL,
	"name" varchar(100) NOT NULL,
	"daily_voucher_price" FLOAT(5) NOT NULL,
	"address" varchar(150) NOT NULL,
	"postal_zip" FLOAT(5) NOT NULL,
	CONSTRAINT "hotels_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE public.tickets (
	"id" serial NOT NULL,
	"id_package" integer NOT NULL,
	"local_start" varchar(100) NOT NULL,
	"local_end" varchar(100) NOT NULL,
	"time_start" TIMESTAMP NOT NULL,
	"time_end" TIMESTAMP NOT NULL,
	"plane_seat" varchar(3) NOT NULL,
	"price" FLOAT(5) NOT NULL,
	CONSTRAINT "tickets_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE public.daily_voucher (
	"id_package" integer NOT NULL,
	"id_hotel" integer NOT NULL,
	"quantity" integer NOT NULL,
	"price" FLOAT(5) NOT NULL,
	CONSTRAINT "daily_voucher_pk" PRIMARY KEY ("id_package","id_hotel")
) WITH (
  OIDS=FALSE
);




ALTER TABLE reservations ADD CONSTRAINT reservations_fk0 FOREIGN KEY ("id_package") REFERENCES packages("id");

ALTER TABLE reservations ADD CONSTRAINT reservations_fk1 FOREIGN KEY ("id_client") REFERENCES clients("id_client");
ALTER TABLE reservations ADD CONSTRAINT reservations_fk2 FOREIGN KEY ("id_travel_agent") REFERENCES employees("id_employees");

-- ERROR:  there is no unique constraint matching given keys for referenced table "clients".
-- SOLUTION: "id_client" was not a primary key.
-- ERROR:  there is no unique constraint matching given keys for referenced table "employees".
-- SOLUTION: "id_employees" was not a primary key.
-- SQL state: 42830

ALTER TABLE clients ADD CONSTRAINT clients_fk0 FOREIGN KEY ("id_client") REFERENCES users("id");

ALTER TABLE employees ADD CONSTRAINT employees_fk0 FOREIGN KEY ("id_employees") REFERENCES users("id");


ALTER TABLE tickets ADD CONSTRAINT tickets_fk0 FOREIGN KEY ("id_package") REFERENCES packages("id");

ALTER TABLE daily_voucher ADD CONSTRAINT daily_voucher_fk0 FOREIGN KEY ("id_package") REFERENCES packages("id");
ALTER TABLE daily_voucher ADD CONSTRAINT daily_voucher_fk1 FOREIGN KEY ("id_hotel") REFERENCES hotels("id");









