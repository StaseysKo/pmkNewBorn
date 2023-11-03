import { getServicesData } from 'src/utils/api/servicesDataAPI';

export default function handler(req, res) {
  const services = getServicesData();
  res.status(200).json(services);
}
