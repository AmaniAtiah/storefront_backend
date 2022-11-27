/* Replace with your SQL commands */


CREATE TABLE products_category(
    id SERIAL PRIMARY KEY,
    product_id bigint REFERENCES products(id),
    category_id bigint REFERENCES categories(id)
 
)