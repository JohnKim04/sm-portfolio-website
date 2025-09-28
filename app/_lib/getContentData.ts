import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});

export default async function getContentData(id: string) {
  // Construct the query with the validated table name
  const query = `SELECT * FROM p_project_2 WHERE id = $1`;
  const result = await pool.query(query, [id]);

  // If no data is found, return a 404 response
  if (result.rowCount === 0) {
    throw new Error(`Failed to fetch data in`);
  }

  const content = result.rows[0];
  return [content.body, content.h2, content.h3, content.h4];
}
