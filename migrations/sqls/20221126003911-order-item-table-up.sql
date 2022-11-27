/* Replace with your SQL commands */

CREATE TABLE order_item(
    id SERIAL PRIMARY KEY,
    product_id bigint REFERENCES products(id),
    order_id bigint REFERENCES orders(id),
    quantity int,
    price VARCHAR(50)

 
)