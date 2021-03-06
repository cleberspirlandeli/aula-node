const UsuarioRepository = require('./usuario.repository');
const Yup = require('yup');

module.exports = {
    GetById,
    Insert,
    Delete
};

async function GetById (req, res) {
    
    const usuario = {
        id: req.params.id
    }

    const user = await UsuarioRepository.GetById(usuario.id)

    res.status(200)
        .json(user);
}

async function Insert (req, res) {
    
    const usuario = {
        nome: req.body.nome,
        email: req.body.email,
        telefone: req.body.telefone,
        senha: req.body.senha,
        sexo: req.body.sexo,
        idade: parseInt(req.body.idade)
    }

    const schema = Yup.object().shape({
        nome: Yup.string().required(),
        email: Yup.string().email().required(),
        senha: Yup.string().required().min(6),
    });

    if (!(await schema.isValid(req.body)))
        return res.status(400).json({ error: 'Validation fails' });

    const novoUsuario = await UsuarioRepository.Insert(usuario);

    res.status(200)
        .json(novoUsuario);
}

async function Delete (req, res) {
    
    const usuario = {
        id: req.params.id
    }

    const schema = Yup.object().shape({
        id: Yup.string().required()
    });

    if (!(await schema.isValid(usuario)))
        return res.status(400).json({ error: 'Validation fails' });

    const novoUsuario = await UsuarioRepository.Delete(usuario.id);

    res.status(200)
        .json(novoUsuario);
}