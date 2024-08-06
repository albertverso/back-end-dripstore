CREATE TABLE `img_produtos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `product_id` int DEFAULT NULL,
  `enabled` int DEFAULT '0',
  `path` varchar(45) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_idx` (`product_id`),
  CONSTRAINT `id` FOREIGN KEY (`product_id`) REFERENCES `produtos` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci