
import { Credential } from '../../entities/Credential';

import credentialRepository from '../../repositories/CredentialRepository';

import { User } from '../../entities/User';

export const createCredentialS = async (username: string, password: string, user: User | null): Promise<Credential> => {
    // Crear el nuevo objeto de credencial
    const newCredential: Credential = credentialRepository.create({
        username,
        password,
        // Solo asignar el usuario si no es null
        ...(user && { user }), // Usamos el operador de propagación para incluir el usuario solo si existe
    }) as Credential;

    // Guardar la nueva credencial en la base de datos
    const savedCredential: Credential = await credentialRepository.save(newCredential);
    return savedCredential; // Retornar la credencial guardada
};