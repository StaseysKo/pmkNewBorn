import PropTypes from 'prop-types';
import React, { useState, useEffect, useRef } from 'react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import { Box } from '@mui/material';
import MapStyle from './MapStyle';

ContactMap.propTypes = {
  locations: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      address: PropTypes.string.isRequired,
      latlng: PropTypes.arrayOf(PropTypes.number).isRequired,
    })
  ).isRequired,
  sx: PropTypes.object,
};

export default function ContactMap({ locations, sx, ...other }) {
  const [tooltip, setTooltip] = useState(null);
  const placemarks = useRef({}).current;

  function computeCenter(locations) {
    const latitudes = locations.map(loc => loc.latlng[0]);
    const longitudes = locations.map(loc => loc.latlng[1]);
  
    const minLat = Math.min(...latitudes);
    const maxLat = Math.max(...latitudes);
    const minLng = Math.min(...longitudes);
    const maxLng = Math.max(...longitudes);
  
    const centerLat = (minLat + maxLat) / 2;
    const centerLng = (minLng + maxLng) / 2;
  
    return [centerLat, centerLng];
  }
  

  const [centerMap, setCenterMap] = useState({
    center: computeCenter(locations),
    zoom: 12,
  });
  

  const closeAllBalloons = () => {
    Object.values(placemarks).forEach(placemark => placemark.balloon.close());
  };

  const handleOpen = (location) => {
    closeAllBalloons();
    setTooltip({
      title: location.title,
      address: location.address,
    });
  };

  useEffect(() => {
    if (tooltip) {
      placemarks[tooltip.title]?.balloon.open();
    }
  }, [tooltip, placemarks]);  

  return (
    <Box sx={{ height: 580, overflow: 'hidden', ...sx }} {...other}>
      <YMaps query={{ lang: 'ru_RU', apikey: 'cc1f761e-c2bd-4990-ada2-5495289c429c', mode: 'release' }}>
        <Map
          state={centerMap}
          options={{
            ...MapStyle,
          }}
          width="100%"
          height="100%"
        >
          {locations.map(location => (
            <Placemark
              key={location.title}
              instanceRef={(ref) => { placemarks[location.title] = ref }}
              geometry={location.latlng}
              onClick={() => handleOpen(location)}
              properties={{
                balloonContent: tooltip && tooltip.title === location.title ? `${tooltip.title}, ${tooltip.address}` : '',
              }}
              modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}
            />
          ))}
        </Map>
      </YMaps>
    </Box>
  );
}
