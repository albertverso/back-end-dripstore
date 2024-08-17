const {User} = require('../models/user')

// Adicionar um novo usuário
const CreateUser = async (req, res) => {
    try {
        User.create(req.body).then((result) => res.status(201).send(result))
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar usuário' });
    }
  };
  
// Buscar todos os usuários
const SearchUserAll = async (req, res) => {
    try {
        User.findAll().then((result) => res.send(result))
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar todos os usuários' });
    }
};

// Buscar um usuário por ID
const SearchUserId = async (req, res) => {
    try{
        User.findOne({ where: { id: req.params.id } }).then((result) => res.send(result))
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar usuário' });
    }
};

// Atualizar um usuário por ID
const UpdateUser = async (req, res) => {
    try {
        User.update(req.body, { where: { id: req.params.id } }).then((result) => res.send(result))
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar usuário' });
    }
};

// Deletar um usuário por ID
const DeleteUser = async (req, res) => {
    try {
        User.destroy({ where: { id: req.params.id } }).then((result) => {
            res.send('deletei com sucesso essa quantidade de linhas: '+result)
        })
    } catch (error) {
        res.status(500).json({ error: 'Erro ao deletar usuário' });
    }
};

module.exports = {
    CreateUser, SearchUserAll, SearchUserId, UpdateUser, DeleteUser
  };