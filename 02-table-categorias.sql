CREATE TABLE 'back-end'.'categorias' (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    slug VARCHAR(255) NOT NULL,
    use_in_menu BOOLEAN DEFAULT 0
);