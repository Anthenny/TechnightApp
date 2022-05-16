import { object, string } from 'zod';

export const createAdminSchema = object({
  body: object({
    name: string({
      required_error: 'Een admin heeft een naam nodig',
      invalid_type_error: 'Naam moet een string zijn'
    }),
    email: string({
      required_error: 'Een admin heeft een email nodig',
      invalid_type_error: 'Email moet een string zijn'
    }),
    password: string({
      required_error: 'Een admin heeft een wachtwoord nodig',
      invalid_type_error: 'Wachtwoord moet een string zijn'
    })
  })
});

export const loginAdminSchema = object({
  body: object({
    email: string({
      required_error: 'Een admin heeft een email nodig',
      invalid_type_error: 'Email moet een string zijn'
    }),
    password: string({
      required_error: 'Een admin heeft een wachtwoord nodig',
      invalid_type_error: 'Wachtwoord moet een string zijn'
    })
  })
});
