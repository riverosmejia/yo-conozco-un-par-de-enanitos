import "dotenv/config";

export const USERNAME = process.env.USERNAME;
export const PASSWORD = process.env.PASSWORD;

export const PORT: number = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000; // Este es para tu servidor
export const DATABASE: string = process.env.DATABASE || "database1"; // Asegúrate de que este sea correcto
export const DB_PORT: number = 5432; // Puerto para PostgreSQL
