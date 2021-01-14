import { css } from 'styled-components'
import { math } from 'polished'
import { mq, SPACE, MAX_CONTENT_WIDTH } from 'Theme'

export const GUTTER = SPACE.L
export const SMALL_GUTTER = SPACE.M

export const fullWidthStyle = `
  position: relative;
  left: 50%;
  right: 50%;
  width: 100vw;
  margin-left: -50vw;
  margin-right: -50vw;
`

export const maxWidthStyle = css`
  padding-left: ${GUTTER};
  padding-right: ${GUTTER};
  max-width: calc(${MAX_CONTENT_WIDTH} + ${math(`${GUTTER} * 2`)});
  margin: 0 auto;
  ${mq.to.M`
    padding-left: ${SMALL_GUTTER};
    padding-right: ${SMALL_GUTTER};
    max-width: calc(${MAX_CONTENT_WIDTH} + ${math(`${SMALL_GUTTER} * 2`)});
  `}
`
