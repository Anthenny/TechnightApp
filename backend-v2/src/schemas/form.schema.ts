import { object, string } from 'zod';

export const createFormSchema = object({
  body: object({
    name: string({
      required_error: 'name is required',
      invalid_type_error: 'name must be a string'
    }),
    email: string({
      required_error: 'Email is required',
      invalid_type_error: 'Email must be a string'
    }),
    phoneNumber: string({
      required_error: 'Phone number is required',
      invalid_type_error: 'Phone number must be a string'
    })
  })
});
