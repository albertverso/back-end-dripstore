CREATE TABLE `categorias` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `slug` varchar(45) NOT NULL,
  `use_in_menu` int DEFAULT '0',
  PRIMARY KEY (`id`),
  CONSTRAINT `product_id` FOREIGN KEY (`id`) REFERENCES `produtos` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci