# API Requirements

The company stakeholders want to create an online storefront to showcase their great product ideas. Users need to be able to browse an index of all products, see the specifics of a single product, and add products to an order that they can view in a cart page. You have been tasked with building the API that will support this application, and your coworker is building the frontend.

These are the notes from a meeting with the frontend developer that describe what endpoints the API needs to supply, as well as data shapes the frontend and backend have agreed meet the requirements of the application.

###### API Endpoints #######

#### Products

- Index (GET `/products`)
- Show  (GET `/products/:id`)
- Create [token required] (POST `/products`)
- [OPTIONAL] Top 5 most popular products (GET `products/mostpopular`)
- [OPTIONAL] Products by category (args: product category) (GET `products/productcate:cate`)
- delete [token required](DELETE `/products/delete/:id`)
- update [token required](PUT `/products/update`)

Table::: products(
    id [SERIAL] [PRIMARY KEY],
    Pname [VARCHAR(255)] [NOT NULL],
    price [VARCHAR(100)] [Not NULL],
    category [VARCHAR(100)]
);

#### Users

- Index [token required] (GET `/users`)
- Show [token required]   (GET `/users/:id`)
- Create N[token required] (POST `/users`)
- update [token required]  (PUT `/users/update`)
- delete [token required]  (DELETE `/users/delete`)
- user-purchases [token required]  (GET `/users/:userid/purchases`)
- user-login   (GET `/users/login`)

Table::: users(id[serial][primary key],firstName [CHARACTER VARYING(50)][not null],lastName [CHARACTER VARYING(50)][not null],Upassword [TEXT] [NOT NULL])

#### Orders

- create orders[token required] (POST `/orders`)
    {
            user_id:parseInt(req.body.userid),
            order_status:req.body.status
    };
- create orderproducts [token required] (POST `/orders/addproductsorder`)
    {
            product_id:parseInt(req.body.productid),
            quantity:parseInt(req.body.quantity),
            order_id:parseInt(req.body.orderid)
    };
- update order status [token required] (PUT `/orders/updateorderstatus`)
    {
          "status":"??",
          "id":"??"
    }
- update products of order [token required] (PUT `/orders/updateproductsoforder`)
    {
            id:parseInt(req.body.id),
            product_id:parseInt(req.body.productid),
            quantity:parseInt(req.body.quantity),
            order_id:parseInt(req.body.orderid)
    };
- delete [token required] (DELETE `/orders/delete/:id`)
- Current Order by user [token required] [args: user id](token required) (GET `/orders/:userid`)
- Completed Orders by user [args: user id](token required) (GET `/orders/complete/:userid`)
- active Orders by user [args: user id](token required) (GET `/orders/active/:userid`)

Table::: orders (
    id [SERIAL] [PRIMARY KEY],
    user_id [INT] [NOT NULl],
    order_status choose
);<br>
Table::: orders_product (
    id SERIAL  PRIMARY KEY,
    product_id INT  NOT NULL,
    order_id   INT  NOT NULL,
    quantity   INT DEFAULT 1,
    CONSTRAINT FK_orders_product_products FOREIGN KEY (product_id)
    REFERENCES products(id) ON DELETE CASCADE ON  UPDATE CASCADE,
    CONSTRAINT FK_orders_product_orders FOREIGN KEY (order_id)
    REFERENCES orders(id) ON DELETE CASCADE ON  UPDATE CASCADE

);

TYPE::: choose AS ENUM('active','complete');

## Data Shapes

#### Product

- id
- name
- price
- [OPTIONAL] category

#### User

- id
- firstName
- lastName
- upassword

#### Orders

- id
- user_id
- order_status (active or complete)

#### orders_product

- id
- product_id
- order_id
- quantity of each product in the order
