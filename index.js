import mongoose from 'mongoose';

const uri = "mongodb+srv://admin:QsD0biG4tezd30bo@clusterbackendads.pgrkw.mongodb.net/backendads?retryWrites=true&w=majority";

mongoose.connect(uri, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}).then( ()=> {
    console.log("Conexão com MongoDB realizada com sucesso!");
}).catch( (exception) => {
    console.log("ERROR: Conexão com MongoDB falhou! \n" + exception);
});
