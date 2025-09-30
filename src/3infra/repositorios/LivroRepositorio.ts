import { inject } from 'inversify';
import LivroRepositorioInterface from '../../2domain/interfaces/LivroRepositorioInterface';
import DBModels from './DBModels';
import Livro from '../../1entidades/Livro';
import { Model } from 'mongoose';

export default class LivroRepositorio implements LivroRepositorioInterface {
    private livroModel: Model<Livro>;
    constructor(
        @inject('DBModels') dbModel: DBModels
    )
    {
        this.livroModel = dbModel.livroModels;
    }
    async buscarTodos(): Promise<(Livro | undefined)[]> {
        return await this.livroModel.find();
    }
    async criar(livro: Livro): Promise<Livro> {
        const livronovo = new this.livroModel(livro);
        return await livronovo.save();
    }
    async deletar(id: string): Promise<boolean> {
        const resultado = await this.livroModel.deleteOne({_id:id});
        return resultado.deletedCount > 0;
    }

}