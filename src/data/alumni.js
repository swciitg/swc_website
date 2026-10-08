// Hall of Fame batches kept in the repo, for years the backend has no records for.
// A batch listed here is ignored once the backend returns that year, so moving one
// into the admin panel later needs no change in this file.
//
// Records use the backend's shape: id (order within the batch), year, name, role, pfp.

const PHOTOS_2024 = '/swc/Images/team_photos'

export const ARCHIVED_ALUMNI = [
  { id: 1, year: '2024-25', name: 'Geetanjay Manik', role: 'General Secretary', pfp: `${PHOTOS_2024}/geet.png` },
  { id: 2, year: '2024-25', name: 'Ketan Singh', role: 'Overall Coordinator', pfp: `${PHOTOS_2024}/ketan.png` },
  { id: 3, year: '2024-25', name: 'Dhanesh V', role: 'Webmaster', pfp: `${PHOTOS_2024}/dhanesh.png` },
  { id: 4, year: '2024-25', name: 'Deepak Singh', role: 'Frontend Lead', pfp: `${PHOTOS_2024}/deepak.png` },
  { id: 5, year: '2024-25', name: 'Siddhant Srivastava', role: 'Backend Lead', pfp: `${PHOTOS_2024}/siddhant2.png` },
  { id: 6, year: '2024-25', name: 'Hardik Roongta', role: 'App Lead', pfp: `${PHOTOS_2024}/hardik.png` },
  { id: 7, year: '2024-25', name: 'Harsh Deep', role: 'Design Lead', pfp: `${PHOTOS_2024}/harsh1.png` },
  { id: 8, year: '2024-25', name: 'Sumeet Deepak Ahire', role: 'Design System Lead', pfp: `${PHOTOS_2024}/sumeet.png` },
  { id: 9, year: '2024-25', name: 'Sanya', role: 'PM Lead', pfp: `${PHOTOS_2024}/sanya2.png` },
  { id: 10, year: '2024-25', name: 'Sathvik Dakappagari', role: 'PM Lead', pfp: `${PHOTOS_2024}/sathvik.png` },
  { id: 11, year: '2024-25', name: 'Ipsita Jain', role: 'Growth Lead', pfp: `${PHOTOS_2024}/ipsita.png` },
  { id: 12, year: '2024-25', name: 'Arushi Kumar', role: 'Operations Manager', pfp: `${PHOTOS_2024}/arushi.png` },
]
