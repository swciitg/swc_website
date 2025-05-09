// import fsPromises from 'fs/promises';
// import path from 'path'
// export async function getCoreTeamData() {
//   console.log(process.env);
//   const filePath = path.join(process.cwd(), 'public/data/core-team-data.json');
//   const jsonData = await fsPromises.readFile(filePath);
//   const objectData = JSON.parse(jsonData);
//   return objectData
// }

export async function getCoreTeamData() {
  try {
    const response = await fetch(process.env.BACKEND_BASE_URL + '/api/coreTeam')
    // if (response.status == 200) {
    const data = await response.json()
    return data;
    // }else{
    //   return [];
    // } 
  } catch (error) {
    return [];
  }
}