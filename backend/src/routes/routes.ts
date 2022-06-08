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

import { loginAdmin, signupAdmin } from '../controllers/admin.controller';
import { createAdminSchema, loginAdminSchema } from '../schemas/admin.schema';
import { protect } from '../controllers/auth.controller';

function routes(app: Express) {
  app.get('/api/v1/form', protect, getAllFormData);
  app.get('/api/v1/form/:id', protect, getOneFormData);
  app.put('/api/v1/form/:id', protect, updateFormData);
  app.post(
    '/api/v1/form',
    validateResource(createFormSchema),
    createForm
  );
  app.delete('/api/v1/form/:id', protect, deleteFormData);

  app.post('/api/v1/login', loginAdmin);
  app.post('/api/v1/signup', validateResource(createAdminSchema), signupAdmin);
}

export default routes;
