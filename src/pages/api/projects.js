import { getProjectsData } from 'src/utils/api/projectsDataAPI';

export default function handler(req, res) {
  const projects = getProjectsData();
  res.status(200).json(projects);
}
