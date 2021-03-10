import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { rem } from 'polished'
import { COLOR, SPACE, FONT_SIZE, FONT_WEIGHT, RADIUS } from 'Theme'
import { useDebouncedCallback } from 'use-debounce'
import { Text } from 'components/Typography'
import { Box } from 'components/Layout'

const DURATION = 400

const LocationImage = styled('div')`
  height: ${rem(200)};
  border-radius: ${RADIUS.L};
  ${({ src }) => `
     background: url("${src}") center / cover no-repeat;
  `}
`

export const TitleWrapper = styled('div')`
  border-top-right-radius: ${RADIUS.L};
  background-color: ${COLOR.WHITE};
  padding: ${SPACE.S};
`

const Card = ({ id, title, onHover, src }) => {
  const debounced = useDebouncedCallback((value) => {
    onHover(value)
  }, DURATION)
  return (
    <Box
      onMouseEnter={() => debounced.callback(id)}
      onMouseLeave={() => debounced.callback(null)}
      position="relative"
      mb={SPACE.L}
    >
      <LocationImage src={src} />
      <Box position="absolute" bottom={0}>
        <TitleWrapper>
          <Text
            as="p"
            fontSize={FONT_SIZE.L}
            fontWeight={FONT_WEIGHT.BOLD}
            color={COLOR.BLACK}
          >
            {title}
          </Text>
        </TitleWrapper>
      </Box>
    </Box>
  )
}

Card.propTypes = {
  id: PropTypes.number.isRequired,
  src: PropTypes.string.isRequired,
  onHover: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
}

export default Card
