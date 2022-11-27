/* Replace with your SQL commands */

CREATE TABLE user_address(
    id SERIAL PRIMARY KEY,
    user_id bigint REFERENCES users(id),
    address_id bigint REFERENCES addresses(id),
    is_default int




 
)

