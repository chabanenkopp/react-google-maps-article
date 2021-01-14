import styled, { css } from 'styled-components'
import {
  flex,
  grid,
  color,
  order,
  space,
  layout,
  flexbox,
  position,
  gridArea,
  typography,
  background,
  alignItems,
  justifyItems,
  justifyContent,
} from 'styled-system'
import propTypes, { createPropTypes } from '@styled-system/prop-types'
import { SPACE } from 'Theme'

const gutter = ({ gutterX, gutterY }) =>
  css`
    ${gutterX && `> * + * { margin-left: ${SPACE[gutterX] || gutterX}};`}
    ${gutterY && `> * + * { margin-top: ${SPACE[gutterY] || gutterY}};`}
  `

const commonPropFunctions = [
  flex,
  space,
  order,
  color,
  layout,
  gutter,
  position,
  gridArea,
  background,
  typography,
]

const commonPropTypes = {
  ...propTypes.space,
  ...propTypes.color,
  ...propTypes.layout,
  ...propTypes.position,
  ...propTypes.typography,
  ...propTypes.background,
  ...createPropTypes(['gutter']),
  ...createPropTypes(flex.propNames),
  ...createPropTypes(order.propNames),
  ...createPropTypes(gridArea.propNames),
}

const Box = styled('div')`
  ${commonPropFunctions}
`

Box.propTypes = commonPropTypes

const Flex = styled('div')`
  display: flex;
  ${commonPropFunctions}
  ${flexbox}
`

Flex.propTypes = {
  ...commonPropTypes,
  ...propTypes.flexbox,
}

const Grid = styled('div')`
  display: grid;
  ${commonPropFunctions}
  ${grid}
  ${alignItems}
  ${justifyContent}
  ${justifyItems}
`

Grid.propTypes = {
  ...commonPropTypes,
  ...propTypes.grid,
  ...createPropTypes(alignItems.propNames),
  ...createPropTypes(justifyContent.propNames),
  ...createPropTypes(justifyItems.propNames),
}

export { Box, Flex, Grid }
