const {Categoria} = require('../models/categoria')

// Adicionar uma nova categoria
const CreateCategory = async (req, res) => {
    Categoria.create(req.body).then((result) => res.status(201).send(result))
  };
  
// Buscar todos os categorias
const SearchCategoryAll = async (req, res) => {
    Categoria.findAll().then((result) => res.send(result))
};

// Buscar um categoria por ID
const SearchCategoryId = async (req, res) => {
    Categoria.findOne({ where: { id: req.params.id } }).then((result) => res.send(result))
};

// Atualizar uma categoria por ID
const UpdateCategory = async (req, res) => {
    Categoria.update(req.body, { where: { id: req.params.id } }).then((result) => res.send(result))
};

// Deletar uma categoria por ID
const DeleteCategory = async (req, res) => {
    Categoria.destroy({ where: { id: req.params.id } }).then((result) => {
        res.send('deletei com sucesso essa quantidade de linhas: '+result)
    })
};

module.exports = {
    CreateCategory, SearchCategoryAll, SearchCategoryId, UpdateCategory, DeleteCategory
}