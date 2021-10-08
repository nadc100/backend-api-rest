import { Router } from 'express-router';
const router = Router();

import * as controladorPropiedades from '../controllers/propiedades.controller'

router.post('/',controladorPropiedades.createPropiedad)

router.get('/',controladorPropiedades.getPropiedad)

router.get('/',controladorPropiedades.getPropiedadById)

router.put('/',controladorPropiedades.updatePropiedadById)

router.delete('/',controladorPropiedades.deletePropiedadById)


export default propiedadesRoutes;