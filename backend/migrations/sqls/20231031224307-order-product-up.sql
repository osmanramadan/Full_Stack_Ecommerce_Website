CREATE TABLE  IF NOT EXISTS  order_product (
    id         SERIAL  PRIMARY KEY,
    product_id INT     NOT NULL,
    order_id   INT     NOT NULL,
    quantity   INT     DEFAULT 1,
    CONSTRAINT FK_orders_product_products FOREIGN KEY (product_id)
    REFERENCES products(id) ON DELETE CASCADE ON  UPDATE CASCADE,
    CONSTRAINT FK_orders_product_orders FOREIGN KEY (order_id)
    REFERENCES orders(id) ON DELETE CASCADE ON  UPDATE CASCADE

);