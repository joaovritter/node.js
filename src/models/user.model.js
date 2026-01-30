const mongoose = require ('mongoose')

const userSchema = new mongoose.Schema({ //definindo o esquema do modelo de usuário
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    
    },
    password: {
        type: String,
        required: true,
        minlength: 7,
    },
});


const contaSchema = new mongoose.Schema ({
    id: {
        type: int, 
        required: true,
        unique: true,   
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    balance: {
        type: Number,
        required: true,
        default: 0,
    }
})

// criando o modelo de usuário com base no esquema definido
const UserModel = mongoose.model('User', userSchema);
const ContaModel = mongoose.model ('Conta', contaSchema);

module.exports = UserModel, ContaModel;
