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
  
  // Parse JSON strings back to arrays
  const parseJSON = (str: string | null) => {
    try {
      return str ? JSON.parse(str) : [];
    } catch (e) {
      console.error('Error parsing JSON:', e);
      return [];
    }
  };

  return [
    parseJSON(content.body),
    parseJSON(content.h2), 
    parseJSON(content.h3),
    parseJSON(content.h4)
  ];
}
