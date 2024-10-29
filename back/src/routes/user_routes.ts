import { Router } from "express";

const Arouter:Router = Router();

import { getAllUser } from "../controllers/Users/getAllUser";

import { getUserById } from "../controllers/Users/getUserById";

import { createUser } from "../controllers/Users/createUser";

import { deleteUser } from "../controllers/Users/deleteUser";

import { loginUser } from "../controllers/Users/loginUser";

//obtener todos los usuarios

Arouter.get("/users",getAllUser);

//obtener usuario por ID

Arouter.get("/user/:id",getUserById);

//crear un usuario

Arouter.post("/users",createUser);

//borrar un usuario

Arouter.delete("/user/:id",deleteUser);

//loguear un usuario

Arouter.post("/user/login", loginUser);

export default Arouter;