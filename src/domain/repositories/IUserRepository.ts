import { User } from "../entities/User";

export interface IUserRepository {
    createUser(user: User): Promise<User>;
    findUserByUserName(username: string): Promise<User | User>; 
}