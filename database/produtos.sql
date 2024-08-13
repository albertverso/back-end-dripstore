CREATE TABLE `produtos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `enabled` int DEFAULT '0',
  `name` varchar(45) NOT NULL,
  `slug` varchar(45) NOT NULL,
  `use_in_menu` int DEFAULT '0',
  `stock` int DEFAULT NULL,
  `description` varchar(45) DEFAULT NULL,
  `price` float NOT NULL,
  `price_with_discount` float NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci