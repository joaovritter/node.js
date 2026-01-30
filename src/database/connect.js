const mongoose = require ('mongoose');

const connectToDatabase = async () => {
    try {
        await mongoose.connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.xwl2ptz.mongodb.net/`);
        console.log('Conectado ao banco de dados com sucesso!');
    
    } catch (error) {
        console.log ('Erro ao conectar ao banco de dados:', error);
    }
};

module.exports = connectToDatabase;