CREATE TABLE `dc.produtos`.`produtos_imagem` (
  `id` INT NOT NULL,
  `product_id` INT NULL,
  `enabled` BOOLEAN NULL,
  `path` VARCHAR(255) NULL,
  PRIMARY KEY (`id`)
  FOREIGN KEY (`id`) REFERENCES `dc.produtos`.`produtos_imagem` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
  );