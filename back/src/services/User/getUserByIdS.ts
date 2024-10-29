import { User } from "../../entities/User";
import userRepository from "../../repositories/UserRepository";

export const getUserByIdS = async (id: number):Promise<User|null>=> {

    const user:User|null = await userRepository.findOne({
    
        where:{id},
        
        relations:{ 

            credential:true

        }
        
    })as User | null;
    
    return user;
};