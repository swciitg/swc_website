import fsPromises from 'fs/promises';
import path from 'path'

export async function getHeadData() {
  const filePath = path.join(process.cwd(), 'public/data/head-data.json');
  const jsonData = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData);
  return objectData
}