CREATE TABLE IF NOT EXISTS products (
    id                 SERIAL PRIMARY KEY,
    ptitle             VARCHAR(255) NOT NULL,
    pdesc              TEXT NOT NULL,
    price              DECIMAL(10, 2) NOT NULL,
    discount           DECIMAL(5, 2)  DEFAULT 0,
    priceafterdiscount DECIMAL(10, 2) NOT NULL,
    category           VARCHAR(100)   NOT NULL,
    subcategory        VARCHAR(100)   ARRAY,
    brand              VARCHAR(100)   NOT NULL,
    colors             VARCHAR(500)   ARRAY,
    images             VARCHAR(2000)  ARRAY,
    coverimage         VARCHAR(200),

    CONSTRAINT FK_category_product FOREIGN KEY (category)
    REFERENCES productcat (catname) ON DELETE CASCADE ON UPDATE CASCADE,
    
    
    CONSTRAINT FK_brand_product FOREIGN KEY (brand)
    REFERENCES productmark (name) ON DELETE CASCADE ON UPDATE CASCADE
);
