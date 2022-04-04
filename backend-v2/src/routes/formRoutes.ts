import { Express, Request, Response } from 'express';
import { createFormSchema } from '../schemas/form.schema';
import validateResource from '../middleware/validateResource';

const formController = require('../controllers/form.controller');

function routes(app: Express) {
  app.post(
    '/api/v1/form',
    validateResource(createFormSchema),
    formController.createForm
  );
}

export default routes;
