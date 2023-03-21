import { Request, Response } from 'express';
import  User  from '../models/user.model';
import  Board from '../models/board.model';

export const getAllUsers = async (_req: Request, res: Response) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const getAllBoards = async (_req: Request, res: Response) => {
    try {
      const boards = await Board.findAll();
      res.json(boards);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Internal server error' });
    }
  };