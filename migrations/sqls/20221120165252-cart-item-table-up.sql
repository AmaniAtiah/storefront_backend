/* Replace with your SQL commands */

CREATE TABLE cart_item(
    id SERIAL PRIMARY KEY,
    cart_id bigint REFERENCES carts(id),
    product_id bigint REFERENCES products(id),
    quantity int

 
)