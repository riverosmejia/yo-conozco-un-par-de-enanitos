import { Request, Response } from "express";
import { loginUserS } from "../../services/User/LoginUserS";
import { Credential } from "../../entities/Credential";

export const loginUser = async (req: Request, res: Response): Promise<void> => {
    try {

        const { username, password } = req.body;

        if (!username || !password) {
            res.status(400).json({ message: 'Nombre de usuario y contraseña son requeridos' });
            
            return;//para aquí malvado;
        
        }

        const credential: Credential | null = await loginUserS(username, password);

        if (!credential) {
            res.status(401).json({ message: 'Usuario o contraseña incorrectos' });
            return; //para aquí malvado;
        }

        res.status(200).json(credential);
    
    } catch (error) {

        res.status(500).json({ message: 'Error en el servidor', error: (error as Error).message });

    }
};
