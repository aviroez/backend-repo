import { Request, Response, NextFunction } from 'express';
import { firebaseAdmin } from '../config/firebaseConfig';

export const verifyToken = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const token = req.headers.authorization?.split(' ')[1]; // Bearer <token>

    if (!token) {
        res.status(401).json({ error: 'Unauthorized: No token provided.' });
        return;
    }

    try {
        const decodedToken = await firebaseAdmin.verifyIdToken(token);
        const { uid } = decodedToken;
        req.params.uid = uid;
        next();
    } catch (error) {
        res.status(403).json({ error: 'Invalid or expired token.' });
    }
};
