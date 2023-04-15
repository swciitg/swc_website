import fsPromises from 'fs/promises';
import path from 'path'

export async function getCardData() {
  const filePath = path.join(process.cwd(), 'public/data/landing-cards-data.json');
  const jsonData = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData);
  return objectData
}
