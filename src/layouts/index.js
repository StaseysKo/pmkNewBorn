import PropTypes from 'prop-types';
// next
import dynamic from 'next/dynamic';
//
const Header = dynamic(() => import('./header/Header'), { ssr: false });
const Footer = dynamic(() => import('./footer/Footer'), { ssr: false });

// ----------------------------------------------------------------------

Layout.propTypes = {
  children: PropTypes.node,
  disabledFooter: PropTypes.bool,
  disabledHeader: PropTypes.bool,
  transparentHeader: PropTypes.bool,
};

export default function Layout({
  children,
  transparentHeader,
  disabledHeader,
  disabledFooter,
}) {
  return (
    <>
      {disabledHeader ? null : <> <Header transparent={transparentHeader} /> </>}

      {children}

      {disabledFooter ? null : <> <Footer /> </>}
    </>
  );
}
