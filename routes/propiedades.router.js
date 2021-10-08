import { Router } from 'express-router';
const router = Router();

import * as propiedadController from '../controllers/propiedades.controller'

router.post('/',propiedadController.createPropiedad)

router.get('/',propiedadController.getPropiedad)

router.get('/',propiedadController.getPropiedadById)

router.put('/',propiedadController.updatePropiedadById)

router.delete('/',propiedadController.deletePropiedadById)


export default propiedadesRoutes;