import { Pool } from 'pg';
import { toSentenceCaseArray } from '@/app/_lib/toSentenceCase';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});

export async function POST(req: Request) {
  try {
    const url = new URL(req.url);
    const apikey = url.searchParams.get('apikey');

    if (!apikey || process.env.API_KEY !== apikey) {
      return new Response(JSON.stringify({ error: 'Unauthorized' }), {
        status: 401,
      });
    }

    // Get the current data for ID '15' (EPG page)
    const selectResult = await pool.query(
      'SELECT * FROM p_project_2 WHERE id = $1',
      ['15']
    );

    if (selectResult.rowCount === 0) {
      return new Response(JSON.stringify({ error: 'EPG content not found' }), {
        status: 404,
      });
    }

    const content = selectResult.rows[0];
    
    // Parse the h4 JSON array
    const parseJSON = (str: string | null) => {
      try {
        return str ? JSON.parse(str) : [];
      } catch (e) {
        console.error('[updateEPGCaptions] Error parsing JSON:', e);
        return [];
      }
    };

    const currentH4 = parseJSON(content.h4);
    
    // Convert all h4 captions to sentence case
    const updatedH4 = toSentenceCaseArray(currentH4);
    
    // Update the database
    const updateResult = await pool.query(
      'UPDATE p_project_2 SET h4 = $1 WHERE id = $2 RETURNING id',
      [JSON.stringify(updatedH4), '15']
    );

    return new Response(
      JSON.stringify({
        success: true,
        id: updateResult.rows[0].id,
        updatedCount: updatedH4.length,
        before: currentH4,
        after: updatedH4,
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('Error updating EPG captions:', error);
    return new Response(
      JSON.stringify({ error: 'Error updating captions', details: String(error) }),
      {
        status: 500,
      }
    );
  }
}

