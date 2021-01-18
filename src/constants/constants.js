import { COLOR } from 'Theme'

export const SCROLL_TO_NAME = {
  USP: 'usp',
  SUBSCRIBE: 'subscribe',
}

export const EMAIL = {}

export const URL = {}

export const AOS_ANIMATION = { FADE_UP: { 'data-aos': 'fade-up' } }

export const GOOGLE_MAP_URL = `https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.GATSBY_GOOGLE_KEY}`

export const MAP_SETTINGS = {
  DEFAULT_MAP_OPTIONS: {
    scrollwheel: false,
    mapTypeControl: false,
    fullscreenControl: false,
    streetViewControl: false,
  },
  DEFAULT_CENTER: { lat: 57, lng: 20 },
  DEFAULT_ZOOM: 4,
  MARKER_SIZE: {
    EXTRA_SMALL: 10,
    SMALL: 30,
    MEDIUM: 40,
  },
  PIXEL_OFFSET: {
    MARKER: {
      X: 0,
      Y: -35,
    },
    LINE: {
      X: 0,
      Y: 20,
    },
  },
  POLYLINE_OPTIONS: {
    DASHED: {
      geodesic: true,
      strokeOpacity: 0,
      strokeWeight: 2,
      strokeColor: COLOR.BLUEBERRY_SODA,
      icons: [
        {
          icon: {
            path: 'M 0,0 0,1',
            strokeOpacity: 1,
            strokeWeight: 2,
            scale: 3,
          },
          offset: '0',
          repeat: '10px',
        },
      ],
    },
    REGULAR: {
      geodesic: true,
      strokeOpacity: 1,
      strokeWeight: 2,
      strokeColor: COLOR.EXPLORATION_GREEN,
    },
  },
  DIRECTIONS_OPTIONS: { suppressMarkers: true, preserveViewport: true },
}
