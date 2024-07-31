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
