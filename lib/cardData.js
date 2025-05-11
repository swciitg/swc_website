import fsPromises from 'fs/promises';
import path from 'path'

export async function getCardData() {
  const filePath = path.join(process.cwd(), 'public/data/landing-cards-data.json');
  const jsonData = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData);
  return objectData
}



// export async function getCardData() {
//   try {
//     const response = await fetch(process.env.BACKEND_BASE_URL + '/api/landingCardsData')
//     // if (response.status == 200) {
//     const data = await response.json()
//     return data;
//     // } else {
//     //   return [];
//     // }
//   } catch (error) {
//     return [];
//   }
// }
