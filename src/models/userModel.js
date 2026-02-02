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


// criando o modelo de usuário com base no esquema definido
const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;
