import { Request, Response } from "express";
import { UserSignUpUseCase } from "../../../application/use-cases/UserSignUpUseCase";
import { UserLoginUseCase } from "../../../application/use-cases/UserLoginUseCase";
import { UserRepository } from "../../persistence/UserRepository";


const userRepository = new UserRepository();
const signUpUseCase = new UserSignUpUseCase(userRepository);
const loginUseCase = new UserLoginUseCase(userRepository);


export class UserController{
    static async signUp(req: Request, res: Response){
        try {
            const user = await signUpUseCase.execute(req.body);
            res.status(201).json(user);
        } catch (error: any) {
          
        }
    }
}