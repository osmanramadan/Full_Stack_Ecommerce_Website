import express from 'express';
import { UserRole } from '../../types/user';



const allowTo =
  (...roles: UserRole[]) =>
  async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    if (!roles.includes(req.body.role)) {
      res.status(401);
      res.json({ access: 'forbidden' });
    }
    next();
  };

export default allowTo;
