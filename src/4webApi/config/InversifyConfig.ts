import { Container } from 'inversify';
import UsuarioController from '../controllers/UsuariosController';
import UsuarioServiceInterface from '../../2domain/interfaces/UsuarioServiceInterface';
import UsuarioService from '../../2domain/services/UsuarioService';
import UsuarioRepositorioInterface from '../../2domain/interfaces/UsuarioAsyncRepositorioInterface';
//import UsuarioRepositorio from '../../3infra/repositorios/UsuarioAsyncRepositorio';
//import UsuarioMongoRepositorio from '../../3infra/repositorios/UsuarioAsyncMongoRepositorio';
import UsuarioMongooseRepositorio from '../../3infra/repositorios/UsuarioAsyncMongooseRepositorio';
import DBModels from '../../3infra/repositorios/DBModels';
import LivroController from '../controllers/LivrosController';
import LivroRepositorioInterface from '../../2domain/interfaces/LivroRepositorioInterface';
import LivroRepositorio from '../../3infra/repositorios/LivroRepositorio';
import LivroServiceInterface from '../../2domain/interfaces/LivroServiceInterface';
import LivroService from '../../2domain/services/LivroService';
//import UsuarioRepositorioInterface from '../../2domain/interfaces/UsuarioRepositorioInterface';
//import UsuarioRepositorio from '../../3infra/repositorios/UsuarioRepositorio';

const container = new Container();

container
    .bind<DBModels>('DBModels')
    .to(DBModels).inRequestScope();
container
    .bind<UsuarioRepositorioInterface>('UsuarioRepositorio')
    .to(UsuarioMongooseRepositorio).inRequestScope();
container
    .bind<UsuarioServiceInterface>('UsuarioService')
    .to(UsuarioService).inRequestScope();
container
    .bind<UsuarioController>('UsuarioController')
    .to(UsuarioController).inRequestScope();
container
    .bind<LivroRepositorioInterface >('LivroRepositorio')
    .to(LivroRepositorio).inRequestScope();
container
    .bind<LivroServiceInterface>('LivroService')
    .to(LivroService).inRequestScope();

container
    .bind<LivroController>('LivroController')
    .to(LivroController).inRequestScope();

export default container;