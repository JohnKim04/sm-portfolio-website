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
      if (!str) return [];
      console.log('Parsing JSON string:', str.substring(0, 100) + '...');
      const parsed = JSON.parse(str);
      console.log('Successfully parsed JSON, length:', parsed.length);
      return parsed;
    } catch (e) {
      console.error('Error parsing JSON:', e);
      console.error('Failed string:', str?.substring(0, 200));
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
