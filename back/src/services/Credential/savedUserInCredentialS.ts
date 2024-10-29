import { Credential } from '../../entities/Credential';
import credentialRepository from '../../repositories/CredentialRepository';
import { User } from '../../entities/User';
export const SavedUserInCredentialS = async (user: User, credentialId: number): Promise<Credential> => {
    
    // Buscar la credencial por su ID
    const credential = await credentialRepository.findOne({ where: { id: credentialId } });
    
    // Si la credencial no existe, lanzar un error
    if (!credential) {
        throw new Error(`Credential with ID ${credentialId} not found.`);
    }

    // Asignar el usuario a la credencial
    credential.user = user;

    // Guardar los cambios en la base de datos
    const updatedCredential = await credentialRepository.save(credential);

    return updatedCredential; // Retornar la credencial actualizada
};

