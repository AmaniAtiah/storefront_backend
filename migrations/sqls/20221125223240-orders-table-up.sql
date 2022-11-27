/* Replace with your SQL commands */

CREATE TABLE orders(
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL, 
    address_id INT NOT NULL, 

    status VARCHAR(50),
    FOREIGN KEY (user_id) REFERENCES users(id),

    FOREIGN KEY (address_id) REFERENCES addresses(id)

)



