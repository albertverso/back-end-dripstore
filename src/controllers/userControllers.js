const {User} = require('../models/user')

// Adicionar um novo usuário
const CreateUser = async (req, res) => {
    User.create(req.body).then((result) => res.status(201).send(result))
  };
  
// Buscar todos os usuários
const SearchUserAll = async (req, res) => {
    User.findAll().then((result) => res.send(result))
};

// Buscar um usuário por ID
const SearchUserId = async (req, res) => {
    User.findOne({ where: { id: req.params.id } }).then((result) => res.send(result))
};

// Atualizar um usuário por ID
const UpdateUser = async (req, res) => {
    User.update(req.body, { where: { id: req.params.id } }).then((result) => res.send(result))
};

// Deletar um usuário por ID
const DeleteUser = async (req, res) => {
    User.destroy({ where: { id: req.params.id } }).then((result) => {
        res.send('deletei com sucesso essa quantidade de linhas: '+result)
    })
};

module.exports = {
    CreateUser, SearchUserAll, SearchUserId, UpdateUser, DeleteUser
  };