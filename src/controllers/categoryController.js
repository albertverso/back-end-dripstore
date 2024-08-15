const {Category} = require('../models/category')

// Adicionar uma nova categoria
const CreateCategory = async (req, res) => {
    Category.create(req.body).then((result) => res.status(201).send(result))
  };
  
// Buscar todos os categorias
const SearchCategoryAll = async (req, res) => {
    Category.findAll().then((result) => res.send(result))
};

// Buscar um Category por ID
const SearchCategoryId = async (req, res) => {
    Category.findOne({ where: { id: req.params.id } }).then((result) => res.send(result))
};

// Atualizar uma Category por ID
const UpdateCategory = async (req, res) => {
    Category.update(req.body, { where: { id: req.params.id } }).then((result) => res.send(result))
};

// Deletar uma Category por ID
const DeleteCategory = async (req, res) => {
    Category.destroy({ where: { id: req.params.id } }).then((result) => {
        res.send('deletei com sucesso essa quantidade de linhas: '+result)
    })
};

module.exports = {
    CreateCategory, SearchCategoryAll, SearchCategoryId, UpdateCategory, DeleteCategory
}