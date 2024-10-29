import { Credential } from '../../entities/Credential';
import credentialRepository from '../../repositories/CredentialRepository';

export const validateCredentialS = async (username: string, password: string): Promise<Credential | null> => {
    // Buscar la credencial en la base de datos
    const credential = await credentialRepository.findOne({
        where: { username }
    });

    // Verificar si la credencial existe y si la contraseña coincide
    if (credential && credential.password === password) {
        return credential; // Retornar el username si las credenciales son válidas
    }
    
    return null; // Retornar null si no son válidas
};