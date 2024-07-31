-- Criar a tabela de usuários 
CREATE TABLE `digitalcollege`.`usuarios` (
  `id` INT NOT NULL,
  `firstname` VARCHAR(45) NULL,
  `surname` VARCHAR(45) NULL,
  `email` VARCHAR(45) NULL,
  `password` VARCHAR(45) NULL,
  PRIMARY KEY (`id`));