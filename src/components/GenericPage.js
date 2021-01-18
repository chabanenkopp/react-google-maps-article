import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import 'aos/dist/aos.css'
import { maxWidthStyle } from 'components/mixins'
import App from 'App'

const Content = styled('div')`
  ${maxWidthStyle};
`

const GenericPage = ({ children }) => (
  <App>
    <Content>{children}</Content>
  </App>
)

GenericPage.propTypes = {
  children: PropTypes.node.isRequired,
}

export default GenericPage
