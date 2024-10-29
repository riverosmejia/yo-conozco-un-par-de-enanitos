import userRepository from "../../repositories/UserRepository";

export const deleteUserS = async (id: number): Promise<void> => {
    
    const user = await userRepository.findOneBy({ id });
    
    if (user) {
        await userRepository.remove(user); // Eliminar el usuario
    } else {
        throw new Error("Usuario no encontrado");
    }
};