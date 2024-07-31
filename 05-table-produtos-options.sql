CREATE TABLE 'back-end'.'produtos_options' (
    id INT AUTO_INCREMENT PRIMARY KEY,
    produto_id INT NOT NULL,
    title VARCHAR(255) NOT NULL,
    shape ENUM('square', 'circle') DEFAULT 'square',
    radius INT DEFAULT 0,
    type ENUM('text', 'color') DEFAULT 'text',
    value VARCHAR(255) NOT NULL,
    FOREIGN KEY (produto_id) REFERENCES produtos(id) ON DELETE CASCADE
);