import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import AOS from 'aos'
import 'aos/dist/aos.css'
// import { SPACE } from 'Theme'
import { Box } from 'components/Layout'
import { maxWidthStyle } from 'components/mixins'
import App from 'App'
// import Footer from './Footer'

const ANIMATION_DURATION = 400

const Content = styled('div')`
  z-index: 0;
  position: relative;
  ${maxWidthStyle};
`

const GenericPage = ({ children }) => {
  React.useEffect(() => {
    AOS.init({
      duration: ANIMATION_DURATION,
      once: true,
    })
  }, [])
  return (
    <App>
      <Box overflow="hidden">
        <Content>{children}</Content>
        {/* <Box css={maxWidthStyle}>
          <Footer mb={{ S: SPACE.XL, M: SPACE.XL }} />
        </Box> */}
      </Box>
    </App>
  )
}

GenericPage.propTypes = {
  children: PropTypes.node.isRequired,
}

export default GenericPage
