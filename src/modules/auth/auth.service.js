import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { save, getByEmail } from '../user/index.js';

export const login = async (params) => {
    const user = await getByEmail(params.email);
    if (!user) {
        return { error: 'Invalid e-mail or password' };        
    }

    const passwordCorrect = bcrypt.compareSync(params.password, user.password);
    if (!passwordCorrect) {
        return { error: 'Invalid e-mail or password' };
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);
    return { token };
};

export const register = async (params) => { };