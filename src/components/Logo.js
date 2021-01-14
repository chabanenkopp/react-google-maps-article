import React from 'react'
import styled from 'styled-components'
import { COLOR, FONT_SIZE } from 'Theme'
import { Text } from 'components/Typography'

export const LOGO_STYLES = `
  font-family: Telegraf;
  font-size: ${FONT_SIZE.XXXL};
  line-height: ${FONT_SIZE.XXXL};
`

const StyledText = styled(Text)`
  ${LOGO_STYLES}
  &:first-letter {
    color: ${COLOR.DUSK_ORANGE};
  }
`

const Logo = (props) => (
  <StyledText as="p" {...props}>
    sudo academy
  </StyledText>
)

export default Logo
