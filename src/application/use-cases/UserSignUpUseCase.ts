import { User } from "../../domain/entities/User";
import { IUserRepository } from "../../domain/repositories/IUserRepository";
import { HashUtil } from "../../shared/utils/HashUtil";
import { UserDTO } from "../dto/UserDTO";

export class UserSignUpUseCase{
    constructor(private userRepository: IUserRepository){};

    async execute(userDto: UserDTO): Promise<User>{
        const hashPassword = await HashUtil.hashPassword(userDto.password);
        const user = new User(
            new Date().toISOString(),
            userDto.username,
            userDto.email,
            userDto.password
        )

        return this.userRepository.createUser(user)
    }
}