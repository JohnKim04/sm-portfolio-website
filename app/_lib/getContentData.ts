import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});

export default async function getContentData(id: string) {
  console.log(`[getContentData] Starting fetch for ID: ${id}`);
  
  // Construct the query with the validated table name
  const query = `SELECT * FROM p_project_2 WHERE id = $1`;
  console.log(`[getContentData] Executing query: ${query}`);
  
  const result = await pool.query(query, [id]);
  console.log(`[getContentData] Query completed. Rows found: ${result.rowCount}`);

  // If no data is found, return a 404 response
  if (result.rowCount === 0) {
    console.log(`[getContentData] ERROR: No data found for ID: ${id}`);
    throw new Error(`Failed to fetch data in`);
  }

  const content = result.rows[0];
  console.log(`[getContentData] Raw content lengths - body: ${content.body?.length}, h2: ${content.h2?.length}, h3: ${content.h3?.length}, h4: ${content.h4?.length}`);

  // Parse JSON strings back to arrays
  const parseJSON = (str: string | null) => {
    try {
      return str ? JSON.parse(str) : [];
    } catch (e) {
      console.error('[getContentData] Error parsing JSON:', e);
      return [];
    }
  };

  console.log(`[getContentData] Parsing JSON content...`);
  const parsedData = [
    parseJSON(content.body),
    parseJSON(content.h2),
    parseJSON(content.h3),
    parseJSON(content.h4)
  ];
  
  console.log(`[getContentData] ✅ Successfully parsed content. Array lengths:`, parsedData.map(arr => arr.length));
  return parsedData;
}
