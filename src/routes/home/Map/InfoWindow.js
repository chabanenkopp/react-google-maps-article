import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import { rem } from 'polished'
import { Text } from 'components/Typography'
import { Box } from 'components/Layout'
import { COLOR, SPACE, FONT_SIZE, FONT_WEIGHT } from 'Theme'

const MAX_WIDTH = rem(240)

const LocationImage = styled('img')`
  object-fit: cover;
  width: 100%;
  height: ${rem(200)};
`

const InfoWindow = ({ title, src }) => (
  <Box maxWidth={MAX_WIDTH}>
    <LocationImage src={src} />
    <Box m={SPACE.M}>
      <Text
        fontSize={FONT_SIZE.L}
        fontWeight={FONT_WEIGHT.SEMI_BOLD}
        color={COLOR.BLACK}
      >
        {title}
      </Text>
    </Box>
  </Box>
)

InfoWindow.propTypes = {
  title: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
}

export default InfoWindow
