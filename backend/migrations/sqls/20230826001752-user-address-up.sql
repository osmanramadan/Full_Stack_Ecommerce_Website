CREATE TABLE  IF NOT EXISTS  user_address (
    id SERIAL  PRIMARY KEY,
    addremail CHARACTER VARYING(50) NOT NULL ,
    addrtitle VARCHAR(255) NOT NULL,
    addrdetails VARCHAR(255) NOT NULL,
    phone  VARCHAR(50) NOT NULL,
    CONSTRAINT FK_user_address_users FOREIGN KEY (addremail)
    REFERENCES users(email) ON DELETE CASCADE ON  UPDATE CASCADE
);