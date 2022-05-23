import { Express, Request, Response } from 'express';
import validateResource from '../middleware/validateResource';

import {
  createForm,
  deleteFormData,
  getAllFormData,
  getOneFormData,
  updateFormData
} from '../controllers/form.controller';
import { createFormSchema } from '../schemas/form.schema';

import {
  loginAdmin,
  protect,
  signupAdmin
} from '../controllers/admin.controller';
import { createAdminSchema, loginAdminSchema } from '../schemas/admin.schema';

function routes(app: Express) {
  // TODO routes beveiligen met behulp van jsonwebtoken
  app.get('/api/v1/form', getAllFormData);
  app.get('/api/v1/form/:id', getOneFormData);
  app.put('/api/v1/form/:id', updateFormData);
  app.post('/api/v1/form', validateResource(createFormSchema), createForm);
  app.delete('/api/v1/form/:id', deleteFormData);

  app.post('/api/v1/login', loginAdmin);
  app.post('/api/v1/signup', validateResource(createAdminSchema), signupAdmin);
}

export default routes;
