import messageRepositories from "../repositories/messageRepositories.js";
import { Request, Response } from "express";


async function getMessages(req: Request, res: Response) {
    try {
        const msg = messageRepositories.list();
        console.log(msg);
        return res.status(200).send(msg); 
    } catch (error) {
        return res.status(500).send(`Erro no bando de dados ${error}`) 
    }
}

async function postMessage(req: Request, res: Response) {
    const { name, text } = req.body 
    try {
        const msg = messageRepositories.create(name, text);
        return res.status(201).json(msg);
    } catch (error) {
        return res.status(500).send(`Erro no bando de dados ${error}`)
    }
}

async function updateMessage(req: Request, res: Response) {
    const { id } = req.query
    try {
        
    } catch (error) {
        return res.status(500).send(`Erro no bando de dados ${error}`)  
    }
}

async function deleteMessage(req: Request, res: Response) {
    try {
        
    } catch (error) {
        
    }
}

export default {postMessage, getMessages, updateMessage, deleteMessage}