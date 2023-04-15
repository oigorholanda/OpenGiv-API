import { db } from "../config/database.js";

async function create ( name: string, text: string ){
    const data = await db.query(`
    INSERT INTO messages (name, message)
    VALUES ($1, $2) RETURNING *`,
    [name, text]
    );

    return data.rows[0];
}

async function list () {
    const data = await db.query(`
    SELECT * FROM messages`
    );

    return data.rows
}

export default {create, list}