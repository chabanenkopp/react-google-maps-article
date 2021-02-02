import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { rem } from 'polished'
import { SPACE } from 'Theme'
import { Flex } from 'components/Layout'

const ListWrapper = styled('div')`
  flex: 1;
  min-width: 0;
  max-width: ${({ contentWidth }) => contentWidth};
`

const List = styled('div')`
  width: 100%;
  margin-left: auto;
  padding: 0 ${SPACE.M} ${SPACE.M} ${SPACE.M};
  max-width: ${({ contentWidth }) => contentWidth};
`

const Map = styled('aside')`
  flex: 1;
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
