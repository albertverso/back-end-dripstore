CREATE TABLE `img_produtos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `product_id` int DEFAULT NULL,
  `enabled` int DEFAULT '0',
  `path` varchar(150) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_idx` (`product_id`),
  CONSTRAINT `id` FOREIGN KEY (`product_id`) REFERENCES `produtos` (`id`)
)