import { db } from "../config/database.js";

async function create (message, name) {
    const data = await db.query(`
    INSERT INTO messages (message, name)
    VALUES ($1, $2) RETURNING *`,
    [message, name]
    );

    return data.rows[0];
}

export default {create}