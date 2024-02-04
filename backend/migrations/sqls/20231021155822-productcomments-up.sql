CREATE TABLE IF NOT EXISTS productcomment (
    id SERIAL PRIMARY KEY,
    prodid int,
    text VARCHAR(255),
    username VARCHAR(50),
    stars int,
    CONSTRAINT FK_comment_product FOREIGN KEY (prodid) REFERENCES products(id) 
    ON DELETE CASCADE 
    ON UPDATE CASCADE
);
