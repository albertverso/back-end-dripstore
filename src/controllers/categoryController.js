const {Category} = require('../models/category')

// Adicionar uma nova categoria
const CreateCategory = async (req, res) => {
    try {
        Category.create(req.body).then((result) => res.status(201).send(result))
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar categoria' });
    }
  };
  
// Buscar todos os categorias
const SearchCategoryAll = async (req, res) => {
    try {
        Category.findAll().then((result) => res.send(result))
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar todas as categorias' });
    }
};

// Buscar um Category por ID
const SearchCategoryId = async (req, res) => {
    try {
        Category.findOne({ where: { id: req.params.id } }).then((result) => res.send(result))
    } catch (error) {
        res.status(500).json({ error: 'Erro ao burcar categoria' });
    }
};

// Atualizar uma Category por ID
const UpdateCategory = async (req, res) => {
    try {
        Category.update(req.body, { where: { id: req.params.id } }).then((result) => res.send(result))
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar categoria' });
    }
};

// Deletar uma Category por ID
const DeleteCategory = async (req, res) => {
    try {
        Category.destroy({ where: { id: req.params.id } }).then((result) => {
            res.send('deletei com sucesso essa quantidade de linhas: '+result)
        })
    } catch (error) {
        res.status(500).json({ error: 'Erro ao deletar categoria' });
    }
};

module.exports = {
    CreateCategory, SearchCategoryAll, SearchCategoryId, UpdateCategory, DeleteCategory
}