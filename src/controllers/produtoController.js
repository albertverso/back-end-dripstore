const {Produto} = require('../models/produto')

// Adicionar uma nova categoria
const CreateProduct = async (req, res) => {
    Produto.create(req.body).then((result) => res.status(201).send(result))
  };
  
// Buscar todos os categorias
const SearchProductAll = async (req, res) => {
    Produto.findAll().then((result) => res.send(result))
};

// Buscar um categoria por ID
const SearchProductId =  async (req, res) => {
    Produto.findOne({ where: { id: req.params.id } }).then((result) => res.send(result))
};

// Atualizar uma categoria por ID
const UpdateProduct =  async (req, res) => {
    Produto.update(req.body, { where: { id: req.params.id } }).then((result) => res.send(result))
};

// Deletar uma categoria por ID
const DeleteProduct =  async (req, res) => {
    Produto.destroy({ where: { id: req.params.id } }).then((result) => {
        res.send('deletei com sucesso essa quantidade de linhas: '+result)
    })
};

module.exports = {
    CreateProduct, SearchProductAll, SearchProductId, UpdateProduct, DeleteProduct
}