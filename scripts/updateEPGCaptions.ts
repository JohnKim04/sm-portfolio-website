/**
 * Script to update EPG image captions to sentence case
 * 
 * Usage:
 *   npx tsx scripts/updateEPGCaptions.ts
 * 
 * Make sure to set your API_KEY environment variable
 */

const API_KEY = process.env.API_KEY;
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

if (!API_KEY) {
  console.error('Error: API_KEY environment variable is not set');
  process.exit(1);
}

async function updateEPGCaptions() {
  try {
    const url = `${BASE_URL}/api/updateEPGCaptions?apikey=${API_KEY}`;
    
    console.log('Updating EPG captions to sentence case...');
    console.log(`Calling: ${BASE_URL}/api/updateEPGCaptions`);
    
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('Error updating captions:', data);
      process.exit(1);
    }

    console.log('\n✅ Successfully updated EPG captions!');
    console.log(`Updated ${data.updatedCount} captions\n`);
    
    console.log('Changes:');
    console.log('─'.repeat(60));
    data.before.forEach((before: string, index: number) => {
      const after = data.after[index];
      if (before !== after) {
        console.log(`[${index}]`);
        console.log(`  Before: ${before}`);
        console.log(`  After:  ${after}`);
        console.log('');
      }
    });
    
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
}

updateEPGCaptions();

