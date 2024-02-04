CREATE TYPE roleChoose   AS ENUM('user','admin_1/id=80226753244');
CREATE TYPE verifyChoose AS ENUM('false', 'true');

CREATE TABLE IF NOT EXISTS users (
    id SERIAL UNIQUE,
    email CHARACTER VARYING(50) NOT NULL UNIQUE,
    password TEXT NOT NULL,
    username CHARACTER VARYING(50) NOT NULL,
    phone VARCHAR(50) NOT NULL,
    role roleChoose DEFAULT 'user',
    profileImg VARCHAR(50) DEFAULT NULL,
    passwordChangedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    passwordResetCode VARCHAR(300) DEFAULT 'undefined',
    passwordResetExpires TIMESTAMP DEFAULT NULL, 
    resetCodeVerified verifyChoose DEFAULT 'false',
    PRIMARY KEY (id, email)
);



