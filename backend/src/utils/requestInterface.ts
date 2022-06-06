import { Request } from 'express';

// TODO userInterface toeveogen
// interface IDecode {
//     address: string,
//     role: string,
//     iat: number,
//     exp: number
//   };

export interface RequestWithUser extends Request {
  user?: string | any;
}
