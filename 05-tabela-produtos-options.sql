CREATE TABLE `dc.produtos`.`produtos_options` (
  `id` INT NOT NULL,
  `product_id` INT NULL,
  `title` VARCHAR(45) NULL,
  `shape` VARCHAR(45) NULL,
  `radius` INT NULL,
  `type` VARCHAR(45) NULL,
  `values` VARCHAR(45) NULL,
  PRIMARY KEY (`id`));