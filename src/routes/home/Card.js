import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { rem } from 'polished'
import { COLOR, SPACE, FONT_SIZE, FONT_WEIGHT, mq } from 'Theme'
import { useDebouncedCallback } from 'use-debounce'
import { Text } from 'components/Typography'
import { Box } from 'components/Layout'

const DURATION = 400

const LocationImage = styled('div')`
  height: ${rem(200)};
  ${mq.to.M`
    height: ${rem(320)};
  `}
  ${({ src }) => `
     background: url("${src}") center / cover no-repeat;
  `}
`

const Card = ({ id, title, onHover, src }) => {
  const debounced = useDebouncedCallback((value) => {
    onHover(value)
  }, DURATION)
  return (
    <Box
      onMouseEnter={() => debounced.callback(id)}
      onMouseLeave={() => debounced.callback(null)}
      bg={COLOR.LYNX_WHITE}
      p={SPACE.M}
      mb={SPACE.M}
    >
      <LocationImage src={src} />
      <Text
        display="inline-block"
        fontSize={FONT_SIZE.L}
        fontWeight={FONT_WEIGHT.BOLD}
        color={COLOR.BLACK}
        mt={SPACE.M}
      >
        {title}
      </Text>
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
