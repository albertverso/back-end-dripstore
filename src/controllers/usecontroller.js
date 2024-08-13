const User = require('../models/models');

const pegarUsuarios = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
};

const criarUsuario = async (req, res) => {
    const { firstname, surname, email, password } = req.body;

    const user = new User({
        firstname,
        surname, 
        email,
        password,
    });

    try {
        const newUser = await user.save();
        res.status(201).json(newUser);
    } catch (err) {
        res.status(400).json({message: err.message});
    }
};

module.exports = {
    pegarUsuarios,
    criarUsuario,
}