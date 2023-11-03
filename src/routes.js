// ----------------------------------------------------------------------

const Routes = {

  portfolio: {
    project: (project) => `/portfolio/${project}`,
  },

  services: {
    service: (service) => `/services/${service}`,
  },

  career: {
    job: (job) => `/career/${job}`,
  },

  // Common
  support: '/support',
  page404: '/404',
  page500: '/500',
};

export default Routes;
