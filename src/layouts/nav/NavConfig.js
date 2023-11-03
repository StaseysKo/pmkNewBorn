// routes
import Routes from 'src/routes';

// ----------------------------------------------------------------------

export const PageLinks = [
  {
    order: '1',
    subheader: 'Услуги',
    items: [
      { title: 'Промышленные металлоконструкции', path: Routes.services.service('industrial-metal-structures') },
      { title: 'Вентиляционные системы и дымоходы', path: Routes.services.service('ventilation-systems-and-chimneys')},
      { title: 'Ограждающие конструкции из Н/С', path: Routes.services.service('stainless-steel-fences') },
      { title: 'Лестницы и площадки обслуживания', path: Routes.services.service('stairs-and-service-platforms')},
      { title: 'Оборудование для пищевой промышленности', path: Routes.services.service('food-industry-equipment') },
      { title: 'Благоустройство города', path: Routes.services.service('urban-development') },
      { title: 'Спортивные и развлекательные сооружения', path: Routes.services.service('sports-and-recreational-facilities') },
      { title: 'Инфраструктурные сооружения', path: Routes.services.service('infrastructure-facilities') },
      { title: 'Нестандартные металлоконструкции', path: Routes.services.service('custom-metal-structures')},
      { title: 'Лифты и подъемники', path: Routes.services.service('elevators-and-lifts') },
      { title: 'Закладные детали', path: Routes.services.service('anchor-details') },
    ],
  },
  {
    order: '3',
    subheader: 'О компании',
    items: [
      { title: 'О нас', path: '/about-company'},
      { title: 'Услуги', path: '/services'},
      { title: 'Портфолио', path: '/portfolio' },
      { title: 'Преимущества', path: '/about-company#advantages'},
      { title: 'Наши клиенты', path: '/about-company#clients'},
      { title: 'Наши партнеры', path: '/about-company#partners'},
      { title: 'Благодарности', path: '/about-company#commendations'},
      { title: 'Карточка организации', path: '/card' },
      { title: 'Карьера', path: '/career' },
    ],
  },
  {
    order: '5',
    subheader: 'Поддержка',
    items: [
      { title: 'FAQ', path: '/faq' },
      { title: 'Контакты', path: '/contacts'},
      { title: 'Поставщикам', path: '/supply'},
    ],
  },
];

export const navConfig = [
  { title: 'О компании', path: '/about-company' },
  { title: 'Услуги', path: '/services' },
  { title: 'Портфолио', path: '/portfolio' },
  { title: 'Поставщикам', path: '/supply' },
  { title: 'Карьера', path: '/career' },
  { title: 'Контакты', path: '/contacts' },
];
