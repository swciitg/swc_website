import fsPromises from 'fs/promises';
import path from 'path'

export async function getHiringCardData() {
  const filePath = path.join(process.cwd(), 'public/data/Hiring-cards-data.json');
  const jsonData = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData);
  return objectData
}


// export async function getHiringCardData() {
//   try {
//     const response = await fetch(process.env.BACKEND_BASE_URL + '/api/hiringCardsData')
//     // if (response.status == 200) {
//     const data = await response.json()
//     return data;
//     // } else {
//     // return [];
//     // }
//   } catch (error) {
//     return [];
//   }
// }