CREATE TABLE  IF NOT EXISTS  productsubcat(
    id SERIAL  PRIMARY KEY,
    name varchar(100) NOT NULL UNIQUE,
    image text,
    productcat varchar(100)  NOT NULL,
    CONSTRAINT FK_ProductMaincateSecondary FOREIGN KEY(productcat)
    REFERENCES productcat(catname) ON DELETE CASCADE ON UPDATE CASCADE
);