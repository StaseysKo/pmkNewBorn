import { getJobsData } from 'src/utils/api/jobsDataAPI';

export default function handler(req, res) {
  const jobs = getJobsData();
  res.status(200).json(jobs);
}
