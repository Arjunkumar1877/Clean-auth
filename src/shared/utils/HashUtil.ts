import bcrypt from 'bcrypt';

export class HashUtil {
    static async hashPassword(password: string): Promise<string>{
        const saltRound = 10;
        return bcrypt.hash(password, saltRound);
    }

    static async comparePassword(password: string, hash: string): Promise<boolean>{
        return bcrypt.compare(password, hash);
    }
}