import { User } from "../entities/User";

export interface IUserRepository {
    createUser(user: User): Promise<User>;
    findUserByUsername(username: string): Promise<User | null>; 
}