import { User } from "../../domain/entities/User";
import { IUserRepository } from "../../domain/repositories/IUserRepository";
import { UserModel } from "./models/UserModel";


export class UserRepository implements IUserRepository{
     async createUser(user: User): Promise<User> {
        const newUser = new UserModel(user);
        await newUser.save();
        return newUser.toObject() as User;    
    }

    findUserByUserName(username: string): Promise<User> {
        const user = await UserModel.findOne({username: username}).lean();

        return user ? user as User : null;
    }
}