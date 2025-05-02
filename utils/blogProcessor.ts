import fs from "fs";
import path from "path";
import { literatureContent } from "../data/blog";

/**
 * Extracts the best content from literature data based on content length and generates a released.js file
 * This function selects the most substantial pieces and formats them for release
 */
export function generateReleasedContent() {
  // Sort content by length (assuming longer content has more substance)
  const sortedContent = [...literatureContent].sort(
    (a, b) => b.content.length - a.content.length
  );

  // Take the top entries (you can adjust this number)
  const bestContent = sortedContent.slice(0, 2);

  // Format the content for the released.js file
  const releasedData = `// Generated released content - ${new Date().toISOString()}

export const releasedContent = ${JSON.stringify(bestContent, null, 2)};

// Export a function to get content by ID
export function getContentById(id) {
  return releasedContent.find(item => item.id === id);
}

// Export a function to get all released content
export function getAllReleasedContent() {
  return releasedContent;
}
`;

  // Write to the released.js file
  const filePath = path.join(process.cwd(), "data", "released.js");
  fs.writeFileSync(filePath, releasedData, "utf8");

  console.log(`Released content generated successfully at ${filePath}`);
  return bestContent;
}

// You can call this function directly or export it for use elsewhere
// Uncomment the line below to run it immediately when this file is imported
// generateReleasedContent();
