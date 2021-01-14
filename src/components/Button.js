import styled from 'styled-components'
import { rem } from 'polished'
import { FONT_SIZE, FONT_WEIGHT, SPACE, COLOR } from 'Theme'

const BUTTON_WIDTH = rem(100)
export const BUTTON_HEIGHT = rem(48)

const Button = styled('button')`
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  text-decoration: none;
  height: ${({ height }) => height};
  min-width: ${BUTTON_WIDTH};
  font-size: ${FONT_SIZE.S};
  font-weight: ${FONT_WEIGHT.MEDIUM};
  color: ${COLOR.EXISTENTIAL_ANGST};
  background-color: ${COLOR.DUSK_ORANGE};
  padding: ${({ paddingHorizontal }) => `0 ${paddingHorizontal}`};
  ${({ isFullWidth }) => isFullWidth && `width: 100%`};
  &:hover {
    background-color: ${COLOR.DUSK_ORANGE_20};
  }
  &:disabled {
    cursor: not-allowed;
    background-color: ${COLOR.DUSK_ORANGE_40};
  }
`

Button.defaultProps = {
  type: 'button',
  height: BUTTON_HEIGHT,
  paddingHorizontal: SPACE.L,
}

export default Button
