import { Request, Response } from 'express';
import  User  from '../models/user.model';
import { v4 as uuidv4 } from 'uuid';


export const getUserById = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const getUser = await User.findOne({
      where: { userId: userId }
    });


    console.log(JSON.stringify(getUser))

    return !getUser
    ? res.status(404).json({ message: 'User not found' })
    : res.json(getUser) 
    
   
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
};


export const getAllUsers = async (_req: Request, res: Response) => {
  try {
    const users = await User.findAll();

    res.json(users);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
};
export const createUser = async (req: Request, res: Response) => {
  try {
    const { name, email, phone } = req.body;
    // const uuid: string = uuidv4();
 
    const newUser = await User.create({
      userId : uuidv4() ,name, email, phone
    })
    
    res.json(newUser);

    
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const { name, email, phone } = req.body;
    // const uuid: string = uuidv4();
 
    const [ count, [upUser]] = await User.update({
      name: name,
      email: email,
      phone: phone,
    }, {
      where: { userId: userId },
      returning: true,
    });
    
    return !upUser// 업데이트된 유저가 몇명인지 
    ? res.status(404).json({ message: 'User not found' })
    : res.json(upUser)

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
};