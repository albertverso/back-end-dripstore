CREATE TABLE `options_produto` (
  `id` int NOT NULL AUTO_INCREMENT,
  `product_id` int NOT NULL,
  `title` varchar(45) NOT NULL,
  `shape` enum('square','circle') DEFAULT 'square',
  `radius` int DEFAULT '0',
  `type` enum('text','color') DEFAULT NULL,
  `values` varchar(45) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `product_name_idx` (`product_id`),
  CONSTRAINT `product_name` FOREIGN KEY (`product_id`) REFERENCES `produtos` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci