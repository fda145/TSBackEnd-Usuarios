import { Usuario } from '../../1entidades/Usuario';
import UsuarioRepositorioInterface from '../../2domain/interfaces/UsuarioAsyncRepositorioInterface';
import 'reflect-metadata';
import { inject, injectable } from 'inversify';
import { Model } from 'mongoose';
import DBModels from './DBModels';

@injectable()
export default class UsuarioMongooseRepositorio implements UsuarioRepositorioInterface {
    private userModel: Model<Usuario>;
    constructor(
      @inject('DBModels') dbModel: DBModels ) {
         this.userModel = dbModel.UserModels;
      }
    async getUsuarios(): Promise<Usuario[]> {
        const users: Usuario[] = await this.userModel.find();
        return users;
    }
    async getUsuarioPorId(id: number): Promise<Usuario | undefined> {
       return await this.userModel.findOne({id}) ?? undefined;
    }
    async criarUsario(usuario: Usuario): Promise<Usuario[]> {
        const user = new this.userModel(usuario);
        await user.save();
        return [user];
    }
    async deletarUsuario(id: number): Promise<boolean> {
       const results = await this.userModel.deleteOne({id});
       return results.deletedCount > 0;
    }
    async atualizarUsuarioParcial(id: number, dadosAtualizados: Partial<Usuario>): Promise<Usuario | undefined> {
       const result = await this.userModel.findOneAndUpdate({id}, dadosAtualizados, {new: true});
       return result ?? undefined;
    }
    async substituirUsuario(id: number, dadosCompletos: Usuario): Promise<Usuario | undefined> {
       const result = await this.userModel.findOneAndUpdate({id}, dadosCompletos, {new: true});
       return result ?? undefined;
    }
}