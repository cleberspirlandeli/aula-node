const UsuarioModel = require("./usuario.model");

module.exports = {
    GetById,
    Insert,
    Delete
};

async function GetById (id) {
    return await UsuarioModel.findById(id);
}

async function Insert (usuario) {
    return await UsuarioModel.create(usuario);
}

async function Delete (id) {
    return await UsuarioModel.deleteOne({_id: id});
}
