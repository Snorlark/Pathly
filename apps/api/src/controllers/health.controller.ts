import { Request, Response, NextFunction } from 'express';
import * as healthService from '../services/health.service';

/**
 * Get health status
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
export const getHealth = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const status = await healthService.checkHealth();
    res.status(200).json(status);
  } catch (error) {
    next(error);
  }
};
