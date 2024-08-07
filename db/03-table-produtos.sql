CREATE TABLE 'back-end'.'produtos' (
    id INT AUTO_INCREMENT PRIMARY KEY,
    enabled BOOLEAN DEFAULT 0,
    name VARCHAR(255) NOT NULL,
    slug VARCHAR(255) NOT NULL,
    use_in_menu BOOLEAN DEFAULT 0,
    stock INT DEFAULT 0,
    description TEXT,
    price FLOAT NOT NULL,
    price_with_discount FLOAT NOT NULL
);