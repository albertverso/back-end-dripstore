CREATE TABLE `dc.produtos`.`produtos` (
  `id` INT NOT NULL,
  `enabled` TINYINT NULL,
  `name` VARCHAR(45) NULL,
  `slug` VARCHAR(45) NULL,
  `use_in_menu` TINYINT NULL,
  `stock` INT NULL,
  `description` VARCHAR(45) NULL,
  `price` FLOAT NULL,
  `price_with_discount` FLOAT NULL,
  PRIMARY KEY (`id`));