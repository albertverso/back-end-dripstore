# back-end-dripstore

iniciando projeto

link - https://github.com/digitalcollegebr/projeto-backend

- carlos
- gabriel
- dennis
- clecio
- gael
- xandao
- gabriel
- diego

CREATE TABLE `dc`.`imagens_produtos` (
  `id` INT NOT NULL,
  `product_id` INT NULL,
  `enabled` INT NULL DEFAULT 0,
  `path` VARCHAR(45) NULL,
  PRIMARY KEY (`id`),
  INDEX `chave_de_produto_idx` (`product_id` ASC) VISIBLE,
  CONSTRAINT `chave_de_produto`
    FOREIGN KEY (`product_id`)
    REFERENCES `dc`.`produtos` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

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
