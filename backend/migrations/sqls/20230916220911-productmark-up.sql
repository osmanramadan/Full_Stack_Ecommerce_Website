CREATE TABLE  IF NOT EXISTS  productmark(
    id SERIAL  PRIMARY KEY,
    name varchar(100) NOT NULL UNIQUE,
    image text
);