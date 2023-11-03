import PropTypes from 'prop-types';
import { Stack, IconButton, Link } from '@mui/material';
import { Icon } from '@iconify/react';

SocialNetworksButton.propTypes = {
  links: PropTypes.objectOf(PropTypes.string),
  sx: PropTypes.object,
};

export default function SocialNetworksButton({
  links = {},
  sx,
  ...other
}) {
  const SOCIAL_NETWORKS = [
    {
      name: 'Telegram',
      icon: 'logos:telegram',
      path: links.telegram || '#telegram-link',
    },
    {
      name: 'VKontakte',
      icon: 'bxl:vk',
      path: links.vkontakte || '#vkontakte-link',
    },
  ];

  return (
    <Stack direction="row" flexWrap="wrap" alignItems="center">
      {SOCIAL_NETWORKS.map((network) => {
        const { name, icon, path } = network;
        return (
          <Link key={name} href={path}>
            <IconButton
              sx={{
                mr: 1.5,
                width: 34,
                height: 34,
                borderRadius: 1,
                bgcolor: '#1d242c',
                ...sx,
              }}
              {...other}
            >
              <Icon icon={icon} width={30} height={30} color="#0077FF"/>
            </IconButton>
          </Link>
        );
      })}
    </Stack>
  );
}
