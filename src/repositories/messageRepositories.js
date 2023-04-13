import { db } from "../config/database.js";

async function create (name, text) {
    const data = await db.query(`
    INSERT INTO messages (name, message)
    VALUES ($1, $2) RETURNING *`,
    [name, text]
    );

    return data.rows[0];
}

export default {create}