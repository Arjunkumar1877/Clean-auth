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
          res.status(400).json({error: error.message });
        }
    }

    static async login(req: Request, res: Response){
        try {
            const { username, password } = req.body;
            const isValid = await loginUseCase.execute(username, password);
            if(isValid){
                res.status(200).json({ message: "Login success"});
            }else{
                res.status(401).json({ message: "Login failed Invaild credentials"});
            }
        } catch (error: any) {
        res.status(400).json({ error: error.message })
        }
    }
}