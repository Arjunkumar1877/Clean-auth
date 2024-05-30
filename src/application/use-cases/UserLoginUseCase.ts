import { IUserRepository } from "../../domain/repositories/IUserRepository";
import { HashUtil } from "../../shared/utils/HashUtil";

export class UserLoginUseCase{
    constructor(private userRepository: IUserRepository){};

    async execute(username: string, password: string): Promise<boolean>{
        const user = await this.userRepository.findUserByUsername(username);

        if(!user){
            return false
;        }

const isPasswordValid = await HashUtil.comparePassword(password, user.password);
return isPasswordValid;
    }
}