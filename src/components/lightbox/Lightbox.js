/* eslint-disable import/no-unresolved */
import PropTypes from "prop-types";
import ReactLightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
//
import { Iconify } from 'src/components/iconify';
//
import StyledLightbox from "./styles";

// ----------------------------------------------------------------------

const ICON_SIZE = 24;

export default function Lightbox({
  slides,
  disabledZoom,
  disabledTotal,
  onGetCurrentIndex,
  ...other
}) {
  const totalItems = slides ? slides.length : 0;

  return (
    <>
      <StyledLightbox />

      <ReactLightbox
        slides={slides}
        animation={{ swipe: 240 }}
        carousel={{ finite: totalItems < 5 }}
        controller={{ closeOnBackdropClick: true }}
        plugins={getPlugins({
          disabledZoom,
        })}
        on={{
          view: ({ index }) => {
            if (onGetCurrentIndex) {
              onGetCurrentIndex(index);
            }
          },
        }}
        toolbar={{
          buttons: ["close"],
        }}
        render={{
          iconClose: () => <Iconify width={ICON_SIZE} icon="carbon:close" />,
          iconZoomIn: () => <Iconify width={ICON_SIZE} icon="carbon:zoom-in" />,
          iconZoomOut: () => (
            <Iconify width={ICON_SIZE} icon="carbon:zoom-out" />
          ),
          iconPrev: totalItems > 1 ? () => (
            <Iconify width={ICON_SIZE + 8} icon="carbon:chevron-left" />
          ) : () => <></>,
          iconNext: totalItems > 1 ? () => (
            <Iconify width={ICON_SIZE + 8} icon="carbon:chevron-right" />
          ) : () => <></>,
        }}
        {...other}
      />
    </>
  );
}

Lightbox.propTypes = {
  slides: PropTypes.array,
  disabledZoom: PropTypes.bool,
  disabledTotal: PropTypes.bool,
  onGetCurrentIndex: PropTypes.func,
};

// ----------------------------------------------------------------------

export function getPlugins({ disabledZoom }) {
  let plugins = [Zoom];

  if (disabledZoom) {
    plugins = plugins.filter((plugin) => plugin !== Zoom);
  }

  return plugins;
}

// ----------------------------------------------------------------------
