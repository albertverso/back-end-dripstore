CREATE TABLE `dc.produtos`.`produtos_categoria` (
  `product_id` INT NOT NULL,
  `category_id` INT NULL,
  PRIMARY KEY (`product_id`)
  ADD CONSTRAINT `product_id`
  FOREIGN KEY (`product_id`) REFERENCES `dc.produtos`.`produtos` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
  ADD CONSTRAINT `category_id`
  FOREIGN KEY (`category_id`) REFERENCES `dc.produtos`.`categorias` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
  );