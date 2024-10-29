
import { Request,Response } from "express";

import { deleteUserS } from "../../services/User/deleteUser";

export const deleteUser = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;  // Ahora obtenemos el ID desde los parámetros
        const userId = parseInt(id);

        console.log(id)

        await deleteUserS(userId);

        res.status(200).json({ message: "Usuario eliminado... como mis ganas de vivir" });
    } catch (error) {
        res.status(500).json({ message: 'Error en el servidor', error: (error as Error).message });
    }
};