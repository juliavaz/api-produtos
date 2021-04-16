import mongoose from 'mongoose';

const User = new mongoose.Schema({
  nome: {
    type: String,
    required: true
  },
  email:{
    type: String,
    required: true
  }, 
  senha: {
    type: String,
    required: true
  }
}, {
  // defindo hora de criação/atualização 
  timestamps: true,
});


export default mongoose.model('user', User);