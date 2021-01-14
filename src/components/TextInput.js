import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { rem } from 'polished'
import { FONT_SIZE, SPACE, COLOR } from 'Theme'
import { pickSpaceProps, omitSpaceProps } from 'utils/styled-system'
import { Box } from 'components/Layout'
import { Text } from 'components/Typography'

const INVALID_BORDER = `1px solid ${COLOR.DUSK_ORANGE}`
export const INPUT_HEIGHT = rem(48)

const InputBase = styled('input')`
  display: block;
  width: 100%;
  height: ${INPUT_HEIGHT};
  font-size: 16px; // needs fixed value >= 16 to prevent zoom on mobile
  color: ${COLOR.WHITE};
  background-color: ${COLOR.EXISTENTIAL_ANGST};
  border: 0.5px solid ${COLOR.WHITE_25};
  text-indent: ${SPACE.M};
  -webkit-appearance: none;
  border-radius: 0;
  &::placeholder {
    color: ${COLOR.WHITE};
  }
  ${({ isValid }) =>
    !isValid &&
    `
      border: ${INVALID_BORDER};
    `}
`

const TextInput = ({ label, isValid, ...props }) => (
  <Box width="100%" {...pickSpaceProps(props)}>
    <Text as="p" fontSize={FONT_SIZE.XS} ml={SPACE.XS} mb={SPACE.XXS}>
      {label}
    </Text>
    <InputBase isValid={isValid} {...omitSpaceProps(props)} />
  </Box>
)

TextInput.defaultProps = {
  isValid: true,
}

TextInput.propTypes = {
  isValid: PropTypes.bool,
  label: PropTypes.string.isRequired,
}

export default TextInput
