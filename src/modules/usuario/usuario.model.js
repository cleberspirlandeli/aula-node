const mongoose = require('mongoose');

const UsuarioSchema = new mongoose.Schema({
    // USUARIO
    nome: {
        type: String,
        required: true,
    },
    telefone: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true,
    },
    idade: {
        type: Number,
        required: true,
    },
    sexo: {
        // Homem
        // Mulher
        type: String,
        enum: [ "H", "M" ],
    },
    senha: {
        type: String,
        required: true,
        select: false
    },
}, {
    schema_version: "1",
    timestamps: true
});

module.exports = mongoose.model('Usuario', UsuarioSchema);
