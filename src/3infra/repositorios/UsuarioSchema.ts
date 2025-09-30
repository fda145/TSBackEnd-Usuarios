import { Schema } from 'mongoose';
import { ContatoSchema } from './ContatoSchema';

//import { optional } from 'inversify';
export const UsuarioSchema: Schema = new Schema({
    id: { type: Number, require: true, unique: true},
    nome: {type: String, require: true},
    ativo: {type: Boolean, default: true},
    saldo: {type: Number, require: false},
    contato : ContatoSchema
});