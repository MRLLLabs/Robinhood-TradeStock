DROP DATABASE IF EXISTS sdc;
CREATE DATABASE sdc;

\c sdc;

CREATE TABLE customer (
 user_id SERIAL PRIMARY KEY,
 user_name VARCHAR (50) NOT NULL,
 user_age INTEGER NOT NULL,
 user_phone VARCHAR (10) NOT NULL,
 street VARCHAR(30) NOT NULL,
 zip INTEGER NOT NULL,
 budget float(2) NOT NULL
);

CREATE TABLE stock (
 stock_id SERIAL PRIMARY KEY,
 stock_name VARCHAR (50) UNIQUE NOT NULL,
 price float(2) NOT NULL,
 CEO VARCHAR (10) NOT NULL,
 employees INTEGER NOT NULL,
 founded INTEGER NOT NULL
);

CREATE TABLE user_stock (
 stock_id INTEGER NOT NULL,
 user_id INTEGER NOT NULL,
 quantity INTEGER NOT NULL,
 FOREIGN KEY (user_id) REFERENCES customer (user_id),
 FOREIGN KEY (stock_id) REFERENCES stock (stock_id)
);

CREATE TABLE transactions (
 stock_id INTEGER NOT NULL,
 user_id INTEGER NOT NULL,
 transaction_type VARCHAR NOT NULL,
 transation_date Date NOT NULL,
 quantity INTEGER NOT NULL,
 total_price float (2) NOT NULL,
 FOREIGN KEY (user_id) REFERENCES customer (user_id),
 FOREIGN KEY (stock_id) REFERENCES stock (stock_id)
);
