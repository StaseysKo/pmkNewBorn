// ----------------------------------------------------------------------

const CLIENTS_NAME = [
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

const _clients = CLIENTS_NAME.map((client, index) => ({
  id: index,
  name: client,
  image: `https://zone-assets-api.vercel.app/assets/logos/${client}.svg`,
}));


export default _clients