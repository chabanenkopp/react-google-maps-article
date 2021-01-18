import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { rem } from 'polished'
import { mq, SPACE } from 'Theme'
import { Flex } from 'components/Layout'

const ListWrapper = styled('div')`
  min-width: 0;
  flex: 1;
  ${mq.from.M`
    width: 50%;
  `}
  ${mq.from.L`
    max-width: calc(
      ${({ contentWidth }) => contentWidth} + ${rem('144px')}
    );
  `}
`

const List = styled('div')`
  width: 100%;
  margin-left: auto;
  padding: 0 ${SPACE.M} ${SPACE.M} ${SPACE.M};
  ${mq.from.L`
    max-width: ${({ contentWidth }) => contentWidth};
  `}
`

const Map = styled('aside')`
  flex: 1;
  ${mq.to.M`
    z-index: -1;
    visibility: hidden;
    position: absolute;
    width: 100%;
  `}
`

const Layout = ({ mapContent, listContent, contentWidth }) => (
  <Flex>
    <ListWrapper contentWidth={contentWidth}>
      {React.cloneElement(listContent, { contentWidth })}
    </ListWrapper>
    {mapContent}
  </Flex>
)

Layout.defaultProps = {
  contentWidth: rem('675px'),
}

Layout.propTypes = {
  contentWidth: PropTypes.string,
  mapContent: PropTypes.node.isRequired,
  listContent: PropTypes.node.isRequired,
}

Layout.List = List
Layout.Map = Map

export default Layout
