import { Router } from 'express';
import PdvController from '../controllers/pdvs';

const routes = Router();

routes.route('/')
      .post(PdvController.validate('create'), PdvController.create)
      .get(PdvController.getPdvById);

routes.route('/search')
      .get(PdvController.search);

export default routes;