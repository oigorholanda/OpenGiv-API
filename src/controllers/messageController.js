import messageRepositories from "../repositories/messageRepositories.js";

async function postMessage(req, res) {
    const {name, text} = req.body
    try {
        const msg = await messageRepositories.create(name, text);
        return res.status(201).json(msg);
    } catch (error) {
        return res.status(500).send(`Erro no bando de dados ${error}`)
    }
}
async function getMessages(req, res) {
    try {
        const msg = await messageRepositories.list();
        console.log(msg);
        return res.status(200).send(msg); 
    } catch (error) {
        return res.status(500).send(`Erro no bando de dados ${error}`) 
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

export default {postMessage, getMessages, updateMessage, deleteMessage}