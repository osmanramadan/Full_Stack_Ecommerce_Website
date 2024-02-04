CREATE TABLE IF NOT EXISTS discountcoupon (
    id SERIAL PRIMARY KEY,
    name varchar(255),
    discount varchar(255),
    expire date
)