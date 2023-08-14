import { Request, Response, NextFunction } from "express";

export class Controller {
  static hi = async (
    _req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      res.json({ message: "Даров Жекос" });
    } catch (err) {
      next(err);
    }
  };
} 