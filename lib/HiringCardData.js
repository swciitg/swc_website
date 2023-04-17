import fsPromises from 'fs/promises';
import path from 'path'

export async function getHiringCardData() {
  const filePath = path.join(process.cwd(), 'public/data/Hiring-cards-data.json');
  const jsonData = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData);
  return objectData
}