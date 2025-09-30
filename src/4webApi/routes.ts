import { Router } from 'express';
import UsuarioController from './controllers/UsuariosController';
import container from './config/InversifyConfig';
import LivroController from './controllers/LivrosController';

const routes = Router();

const usuarioController = container.get<UsuarioController>('UsuarioController');
const livroController = container.get<LivroController>('LivroController');

// Test Driven Design
routes.use('/usuarios', usuarioController.router);
routes.use('/livros', livroController.router);

export default routes;