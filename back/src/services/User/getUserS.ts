import { User } from "../../entities/User";
import userRepository from "../../repositories/UserRepository";

export const getUserS = async ():Promise<User[]> => {
    const users:User[] = await userRepository.find({
        
        relations:{

            credential:true,
            appointments:true

        }

    })as User[];

    return users;
};