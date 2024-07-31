-- Criar a tabela de produtos
ALTER TABLE `digitalcollege`.`produtos` 
ADD COLUMN `slug` VARCHAR(45) NULL AFTER `name`,
ADD COLUMN `use_in_menu` VARCHAR(45) NULL AFTER `slug`,
ADD COLUMN `stock` VARCHAR(45) NULL AFTER `use_in_menu`,
ADD COLUMN `description` VARCHAR(45) NULL AFTER `stock`,
ADD COLUMN `price` VARCHAR(45) NULL AFTER `description`,
ADD COLUMN `price_with_discount` VARCHAR(45) NULL AFTER `price`,
CHANGE COLUMN `nome` `enabled` VARCHAR(45) NULL DEFAULT NULL ,
CHANGE COLUMN `preco` `name` INT NULL DEFAULT NULL ;