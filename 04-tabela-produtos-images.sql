CREATE TABLE `dc.produtos`.`produtos_imagem` (
  `id` INT NOT NULL,
  `product_id` INT NULL,
  `enabled` TINYINT NULL,
  `path` VARCHAR(45) NULL,
  PRIMARY KEY (`id`));