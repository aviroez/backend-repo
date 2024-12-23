import { firebaseDB } from '../config/firebaseConfig';
import { User } from '../entities/user';

export const getUsers = async (): Promise<User[]> => {
    const usersSnapshot = await firebaseDB.collection('USERS').get();
    return usersSnapshot.docs.map((doc: any) => ({
        ...doc.data(),
    }));
}

export const updateUser = async (id: string, updatedData: User) => {
    const userRef = firebaseDB.collection('USERS').doc(id);
    return await userRef.set(updatedData, { merge: true });
}

export const getUser = async (uid: string) => {
    const userDoc = await firebaseDB.collection('USERS').doc(uid).get();
    
    if (!userDoc.exists) {
        throw new Error('User not found');
    }
    return {
        uid: uid,
        ...userDoc.data(),
    };
}