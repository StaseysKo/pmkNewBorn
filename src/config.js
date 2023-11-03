// API
// ----------------------------------------------------------------------

export const HOST_API = {
  dev: process.env.DEV_API,
  production: process.env.PRODUCTION_API,
};

// DEFAULT LOCALE
// ----------------------------------------------------------------------
// Also change in next.config.mjs

export const defaultLocale = 'ru';

// SETTINGS
// ----------------------------------------------------------------------

export const defaultSettings = {
  // light | dark
  themeMode: 'dark',
  // ltr | rtl
  themeDirection: 'ltr',
  //  default | blueOrange | greenOrange | purpleTeal | cyanYellow | pinkCyan
  themeColorPresets: 'default',
};

// LAYOUT
// ----------------------------------------------------------------------

export const HEADER_MOBILE_HEIGHT = 76;
export const HEADER_DESKTOP_HEIGHT = 96;
export const DRAWER_WIDTH = 280;

export const MARGIN_BOTTOM_DESKTOP = 80;

export const SERVICES_DIR = '_data/services';
export const PROJECTS_DIR = '_data/projects';
export const CAREER_DIR = '_data/career';