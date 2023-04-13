import { create } from "../repositories/message.repositories.js";

async function postMessage(req, res) {
    const {name, text} = req.body
    try {
        const msg = await create(name, text);
        return res.status(201).json(msg);
    } catch (error) {
        
    }
}
async function getMessage(req, res) {
    try {
        
    } catch (error) {
        
    }
}
async function updateMessage(req, res) {
    try {
        
    } catch (error) {
        
    }
}
async function deleteMessage(req, res) {
    try {
        
    } catch (error) {
        
    }
}

export default {postMessage, getMessage, updateMessage, deleteMessage}