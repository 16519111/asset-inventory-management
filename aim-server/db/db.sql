CREATE TABLE aimmsid.users (
	id INT auto_increment NOT NULL,
	username varchar(100) NULL,
	password varchar(100) NULL,
	CONSTRAINT users_PK PRIMARY KEY (id)
)

CREATE TABLE aimmsid.inventories (
	id integer auto_increment NOT NULL,
	name varchar(100) NULL,
	pf varchar(100) NOT NULL,
	location varchar(100) NULL,
	division varchar(100) NULL,
	serial_number varchar(100) NULL,
	`type` varchar(100) NULL,
	hostname varchar(100) NULL,
	os varchar(100) NULL,
	ip varchar(100) NULL,
	status varchar(100) NULL,
	remarks TEXT NULL,
	CONSTRAINT inventories_PK PRIMARY KEY (id)
)