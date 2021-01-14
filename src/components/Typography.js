import styled from 'styled-components'
import { space, color, typography, display, layout } from 'styled-system'
import propTypes, { createPropTypes } from '@styled-system/prop-types'
import { FONT_SIZE, mq } from 'Theme'

const textFunctions = [display, space, color, typography, layout]

const styledPropTypes = {
  ...createPropTypes(display.propNames),
  ...propTypes.space,
  ...propTypes.color,
  ...propTypes.layout,
  ...propTypes.typography,
}

export const Text = styled('span')`
  ${textFunctions}
`

Text.propTypes = styledPropTypes

export const H1 = styled('h1')`
  margin: 0;
  line-height: 1;
  font-size: ${FONT_SIZE.XXXXXL};
  ${mq.from.L`
    font-size: ${FONT_SIZE.XXXXXXL};
  `}
  ${textFunctions}
`

export const H2 = styled('h2')`
  margin: 0;
  line-height: 1.2;
  font-size: ${FONT_SIZE.XXXXL};
  ${mq.from.M`
    font-size: ${FONT_SIZE.XXXXXL};
  `}
  ${textFunctions}
`

export const H3 = styled('h3')`
  margin: 0;
  line-height: 1.2;
  font-size: ${FONT_SIZE.XL};
  ${mq.from.M`
    font-size: ${FONT_SIZE.XXL};
  `}
  ${textFunctions}
`

export const H4 = styled('h4')`
  font-size: ${FONT_SIZE.L};
  ${mq.from.M`
    font-size: ${FONT_SIZE.XL};
  `}
  ${textFunctions}
`

export const H5 = styled('h5')`
  font-size: ${FONT_SIZE.M};
  ${mq.from.M`
    font-size: ${FONT_SIZE.L};
  `}
  ${textFunctions}
`

export const H6 = styled('h6')`
  font-size: ${FONT_SIZE.S};
  ${mq.from.M`
    font-size: ${FONT_SIZE.M};
  `}
  ${textFunctions}
`
