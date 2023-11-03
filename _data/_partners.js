// ----------------------------------------------------------------------

const PARTNERS_NAME = [
  'airbnb',
  'dropbox',
  'facebook',
  'google',
  'heroku',
  'lenovo',
  'microsoft',
  'netflix',
  'slack',
  'spotify',
  'tripadvisor',
  'vimeo',
];

const _partners = PARTNERS_NAME.map((partner, index) => ({
  id: index,
  name: partner,
  image: `https://zone-assets-api.vercel.app/assets/logos/${partner}.svg`,
}));

export default _partners