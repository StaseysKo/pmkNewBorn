import phoneIcon from '@iconify-icons/mdi/phone';
import whatsappIcon from '@iconify-icons/fa-brands/whatsapp';
import viberIcon from '@iconify-icons/fa-brands/viber';
import telegramIcon from '@iconify-icons/mdi/telegram';
import roundPhoneCallback from '@iconify/icons-ic/round-phone-callback';

const _fastCommunication = [
  { 
    value: 'number',
    href: "tel:92-68-00", 
    icon: phoneIcon, 
    label: "92-68-00" 
  },
  { 
    value: 'whatsapp',
    color: '#25D366',
    href: "https://wa.me/+79097924715", 
    icon: whatsappIcon, 
    label: "WhatsApp" 
  },
  { 
    value: 'viber',
    color: '#665CAC',
    href: "https://viber.click/79097924715",
    icon: viberIcon, 
    label: "Viber" 
  },
  { 
    value: 'telegram',
    color: '#0088cc',
    href: "tg://resolve?domain=staseys", 
    icon: telegramIcon, 
    label: "Telegram" 
  },
  { 
    value: 'callback',
    color: '#FA541C',
    icon: roundPhoneCallback, 
    label: "Обратный звонок" 
  },
];

export default _fastCommunication