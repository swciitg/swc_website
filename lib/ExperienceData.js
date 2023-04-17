import fsPromises from 'fs/promises';
import path from 'path'

export async function getExperienceData() {
  const filePath = path.join(process.cwd(), 'public/data/ExperiencesCard.json');
  const jsonData = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData);
  return objectData
}