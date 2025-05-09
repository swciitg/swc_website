// import fsPromises from 'fs/promises';
// import path from 'path'

// export async function getExperienceData() {
//   const filePath = path.join(process.cwd(), 'public/data/ExperiencesCard.json');
//   const jsonData = await fsPromises.readFile(filePath);
//   const objectData = JSON.parse(jsonData);
//   return objectData
// }

export async function getExperienceData() {
  try {
    const response = await fetch(process.env.BACKEND_BASE_URL + '/api/experiencesCardData')
    // if (response.status == 200) {
    const data = await response.json()
    return data;
    // } else {
    // return [];
    // }
  } catch (error) {
    return [];
  }
}