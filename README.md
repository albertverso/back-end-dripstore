# back-end-dripstore

iniciando projeto


- carlos
- gabriel
- dennis
- clecio
- gael
- xandao
- gabriel
- diego

CREATE TABLE `dc`.`produtos` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `enabled` INT NULL DEFAULT 0,
  `name` VARCHAR(45) NULL,
  `slug` VARCHAR(45) NULL,
  `use_in_menu` VARCHAR(45) NULL,
  `stock` INT NULL DEFAULT 0,
  `description` VARCHAR(45) NULL,
  `price` FLOAT NULL,
  `price_with_discount` FLOAT NULL,
  PRIMARY KEY (`id`));
