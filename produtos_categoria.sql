CREATE TABLE `produtos_categoria` (
  `product_id` int NOT NULL,
  `category_id` int NOT NULL,
  KEY `product_id_idx` (`product_id`),
  KEY `category_id_idx` (`category_id`),
  CONSTRAINT `categorias` FOREIGN KEY (`category_id`) REFERENCES `categorias` (`id`),
  CONSTRAINT `product` FOREIGN KEY (`product_id`) REFERENCES `produtos` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci