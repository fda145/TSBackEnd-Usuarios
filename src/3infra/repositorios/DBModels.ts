import mongoose, { Model } from 'mongoose';
import { Usuario } from '../../1entidades/Usuario';
import { UsuarioSchema } from './UsuarioSchema';
import { injectable } from 'inversify';
import 'reflect-metadata';
import Livro from '../../1entidades/Livro';
import { LivroSchema } from './LivroSchema';

@injectable()
class DBModels {
    public get UserModels(): Model<Usuario> {
        const UserModel = mongoose.model<Usuario>('User',UsuarioSchema);
        return UserModel;
    }
    public get livroModels(): Model<Livro> {
        const LivroModel = mongoose.model<Livro>('Book', LivroSchema);
        return LivroModel;
    }
}

export default DBModels;