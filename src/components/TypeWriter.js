import { useEffect } from 'react';
import Typed from 'typed.js';
import { Box } from '@mui/material';

export default function Typewriter() {
  useEffect(() => {
    const options = {
      strings: ['изделий', 'конструкций', 'сооружений'],
      typeSpeed: 130,
      backSpeed: 100,
      loop: true,
    };

    const typed = new Typed('#dynamic-text', options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <Box component="span" sx={{ display: 'inline-block', minWidth: '450px'}}>
      <span style={{ marginRight: '4px' }} id="dynamic-text"></span>
    </Box>
  );
}
