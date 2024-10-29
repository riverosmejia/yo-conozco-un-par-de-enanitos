
import { Request,Response } from "express";
import { getUserS } from "../../services/User/getUserS";

export const getAllUser=async (req:Request,res:Response)=>{
    
    const users = await getUserS();

    if(users){

    res.status(200).json(users);

    }
};