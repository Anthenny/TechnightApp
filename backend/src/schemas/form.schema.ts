import { object, string } from 'zod';

export const createFormSchema = object({
  body: object({
    firstName: string({
      required_error: 'Firstname is required',
      invalid_type_error: 'Firstname must be a string'
    }),
    lastName: string({
      required_error: 'Lastname is required',
      invalid_type_error: 'Lastname must be a string'
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
