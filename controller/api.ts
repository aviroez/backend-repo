import { Request, Response } from 'express';
import { getUser, getUsers, updateUser } from '../repository/userCollection';

export const fetchUserData = async (req: Request, res: Response) => {
    try {
      const data = await getUsers();
  
      res.status(200).json({ data });
    } catch (error) {
      console.error('Error fetching users:', error);
      res.status(500).json({ error: 'Failed to fetch users.' });
    }
};

export const fetchUserDataById = async (req: Request, res: Response) => {
    const uid = req.params.uid;
    try {
      const data = await getUser(uid);
  
      res.status(200).json({ data });
    } catch (error) {
      console.error('Error fetching users:', error);
      res.status(500).json({ error: 'Failed to fetch users.' });
    }
};

export const updateUserData = async (req: Request, res: Response) => {
    const uid = req.params.uid;
    const updatedData = req.body;
  
    try {
        updateUser(uid, updatedData);
  
        res.status(200).json({ message: `User ${uid} updated successfully.` });
    } catch (error) {
        console.error('Error updating user:', error);
        res.status(500).json({ error: 'Failed to update user.' });
    }
};

export const notFound = (req: Request, res: Response): void => {
  res.status(404).json({ error: 'Route not found.' });
};
