CREATE TABLE `dc.produtos`.`categorias` (
  `id` INT NOT NULL,
  `name` VARCHAR(45) NULL,
  `slug` VARCHAR(45) NULL,
  `use_in_menu` TINYINT NULL,
  PRIMARY KEY (`id`));