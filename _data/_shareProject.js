import { FaVk, FaWhatsapp, FaViber, FaTelegramPlane } from 'react-icons/fa';
import { MdContentCopy } from 'react-icons/md';

const _shareProject = [
  {
    value: 'copy',
    label: 'Скопировать ссылку',
    icon: <MdContentCopy />,
    color: '#fff',
    action: (close) => {
      navigator.clipboard.writeText(window.location.href);
      close();
    },
  },
  {
    value: 'vk',
    label: 'VK',
    icon: <FaVk />,
    color: '#4a76a8',
    action: (close) => {
      window.open(`https://vk.com/share.php?url=${window.location.href}`, '_blank');
      close();
    },
  },
  {
    value: 'whatsapp',
    label: 'WhatsApp',
    icon: <FaWhatsapp />,
    color: '#25D366',
    action: (close) => {
      window.open(`https://api.whatsapp.com/send?text=${window.location.href}`, '_blank');
      close();
    },
  },
  {
    value: 'viber',
    label: 'Viber',
    icon: <FaViber />,
    color: '#665CAC',
    action: (close) => {
      window.open(`viber://forward?text=${window.location.href}`, '_blank');
      close();
    },
  },
  {
    value: 'telegram',
    label: 'Telegram',
    icon: <FaTelegramPlane />,
    color: '#0088cc',
    action: (close) => {
      window.open(`https://t.me/share/url?url=${window.location.href}`, '_blank');
      close();
    },
  },
];

export default _shareProject