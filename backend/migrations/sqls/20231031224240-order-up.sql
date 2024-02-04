CREATE TYPE status AS ENUM('waiting', 'complete','cancle');



CREATE TABLE IF NOT EXISTS orders(
    id           SERIAL PRIMARY KEY,
    userinfo     jsonb[], -- Use jsonb for JSON objects
    address      jsonb[], -- Use jsonb for JSON objects
    items        varchar(2000) ARRAY,
    user_id      INT NOT NULL,
    order_status status DEFAULT 'waiting',
    price        varchar(255),
    CONSTRAINT FK_orders_product_users FOREIGN KEY (user_id)
    REFERENCES users(id) ON DELETE CASCADE ON UPDATE CASCADE
);
