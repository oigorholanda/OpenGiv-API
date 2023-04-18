import { QueryResult } from "pg";
import { db } from "../config/database.js";
import { message } from "../protocols/messages.js";

async function create ( message: message ){
    const data = await db.query(`
    INSERT INTO messages (name, message)
    VALUES ($1, $2) RETURNING *`,
    [message.name, message.text]
    );

    return data.rows[0];
}

async function listAll (): Promise<QueryResult<message>> {
    const data = await db.query(`
    SELECT * FROM messages`
    );
    console.log(data.rows);
    
    return data
}

export default {create, listAll}