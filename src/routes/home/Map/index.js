import React from 'react'
import styled from 'styled-components'
import { GOOGLE_MAP_URL } from 'constants/constants'
import { Box } from 'components/Layout'
import MapContainer from './Map'

const StyledBox = styled(Box)`
  position: sticky;
  top: 0;
  height: 100vh;
`

const MapElement = styled(Box)`
  .gm-ui-hover-effect {
    display: none !important;
  }
  .gm-style .gm-style-iw-t::after {
    box-shadow: -2px 2px 2px rgba(66, 149, 165, 0.25);
  }
  .gm-style-iw.gm-style-iw-c {
    padding: 0;
    .gm-style-iw-d {
      overflow: hidden !important;
    }
  }
  .gmnoprint.gm-bundled-control.gm-bundled-control-on-bottom {
    top: 0;
  }
`

const Map = (props) => (
  <StyledBox>
    <MapContainer
      googleMapURL={GOOGLE_MAP_URL}
      loadingElement={<Box height="100%" />}
      containerElement={<Box height="100%" />}
      mapElement={<MapElement height="100%" />}
      {...props}
    />
  </StyledBox>
)

export default Map
