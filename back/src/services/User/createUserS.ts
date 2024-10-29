import {I_UserData }from "../../DTO/I_dto";
import {createCredentialS} from "../Credential/createCredentialS";
import { SavedUserInCredentialS } from "../Credential/savedUserInCredentialS";
import { AppDataSource } from "../../config/appDataSource";
import { User } from "../../entities/User";
import { Credential } from "../../entities/Credential";
import userRepository from "../../repositories/UserRepository";

export const createUserS = async (userData:I_UserData): Promise<User|string> => {
    const queryRunner = AppDataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
        // Verificar si ya existe un usuario con el mismo DNI
        const existingUser = await userRepository.findOne({ where: { nDni: userData.nDni } });
        
        if (existingUser) {
            return "este Dni ya ha sido registrado perro";
        }

        const existingUser_=await userRepository.findOne({where:{email:userData.email}})

        if(existingUser_){
            return "este Email ya ha sido registrado perro";
        }

        // Crear el usuario
        const user: User = await queryRunner.manager.save(
            userRepository.create({
                name: userData.name,
                email: userData.email,
                password: userData.password,
                birthdate: userData.birthdate,
                nDni: userData.nDni,
                role: userData.role,
            })
        ) as User;

        // Crear la credencial asociando el userId
        const credential: Credential = await createCredentialS(userData.email, userData.password, null);

        // Asignar el ID de la credencial al usuario
        user.credential = credential;

        // Guardar el usuario actualizado con la credencial
        await queryRunner.manager.save(user);

        SavedUserInCredentialS(user,credential.id);

        // Confirmar la transacción
        await queryRunner.commitTransaction();
        return user;

    } catch (error) {
        // Revertir la transacción en caso de error
        await queryRunner.rollbackTransaction();
        throw error;

    } finally {
        // Liberar el QueryRunner
        await queryRunner.release();
    }
};