import { Request, Response } from "express";

// Obtener todos los datos provenientes de la tabla en cuestión
export const getNameJonas = async (_req:Request, res:Response): Promise<Response> => {    
    const names = "Jonas Aray"
    return res.status(200).json(names);
}

export const getNameCesar = async (_req:Request, res:Response): Promise<Response> => {    
    const names = "Cesar Morantes"
    return res.status(200).json(names);
}