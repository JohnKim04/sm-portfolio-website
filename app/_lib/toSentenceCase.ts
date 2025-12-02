/**
 * Converts a string to sentence case.
 * - First letter of the string is capitalized
 * - Words after colons are capitalized
 * - Words after numbers are capitalized
 * - Rest of the string is lowercase
 * - Preserves existing punctuation and spacing
 */
export function toSentenceCase(text: string): string {
  if (!text || text.length === 0) return text;
  
  // Trim whitespace
  const trimmed = text.trim();
  if (trimmed.length === 0) return text;
  
  // Start with lowercase version
  let result = trimmed.toLowerCase();
  
  // Capitalize first letter
  result = result.charAt(0).toUpperCase() + result.slice(1);
  
  // Capitalize all words after colons in title case
  result = result.replace(/: (.+)/g, (match, textAfterColon) => {
    const words = textAfterColon.split(/\s+/);
    const capitalizedWords = words.map(word => {
      if (word.length === 0) return word;
      return word.charAt(0).toUpperCase() + word.slice(1);
    });
    return `: ${capitalizedWords.join(' ')}`;
  });
  
  // Capitalize all words after numbers in title case
  // Matches: number followed by space and then text
  result = result.replace(/(\d+)\s+(.+)/g, (match, digits, textAfterNumber) => {
    const words = textAfterNumber.split(/\s+/);
    const capitalizedWords = words.map(word => {
      if (word.length === 0) return word;
      return word.charAt(0).toUpperCase() + word.slice(1);
    });
    return `${digits} ${capitalizedWords.join(' ')}`;
  });
  
  return result;
}

/**
 * Converts an array of strings to sentence case
 */
export function toSentenceCaseArray(texts: string[]): string[] {
  return texts.map(toSentenceCase);
}

