const {Usuario} = require('../models/usuarios')

// Adicionar um novo usuário
const CreateUser = async (req, res) => {
    Usuario.create(req.body).then((result) => res.status(201).send(result))
  };
  
// Buscar todos os usuários
const SearchUserAll = async (req, res) => {
    Usuario.findAll().then((result) => res.send(result))
};

// Buscar um usuário por ID
const SearchUserId = async (req, res) => {
    Usuario.findOne({ where: { id: req.params.id } }).then((result) => res.send(result))
};

// Atualizar um usuário por ID
const UpdateUser = async (req, res) => {
    Usuario.update(req.body, { where: { id: req.params.id } }).then((result) => res.send(result))
};

// Deletar um usuário por ID
const DeleteUser = async (req, res) => {
    Usuario.destroy({ where: { id: req.params.id } }).then((result) => {
        res.send('deletei com sucesso essa quantidade de linhas: '+result)
    })
};

module.exports = {
    CreateUser, SearchUserAll, SearchUserId, UpdateUser, DeleteUser
  };