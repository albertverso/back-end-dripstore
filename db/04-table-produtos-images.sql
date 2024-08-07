CREATE TABLE 'back-end'.'produtos_images' (
    id INT AUTO_INCREMENT PRIMARY KEY,
    product_id INT,
    enabled BOOLEAN DEFAULT 0,
    path VARCHAR(255) NOT NULL,
    FOREIGN KEY (product_id) REFERENCES produtos(id) ON DELETE CASCADE
);