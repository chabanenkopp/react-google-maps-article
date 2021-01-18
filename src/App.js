import 'sanitize.css'
import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles, theme } from 'Theme'
import localFonts from 'fonts'

const App = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Helmet defer={false}>
      <style>{localFonts}</style>
    </Helmet>
    <GlobalStyles />
    {children}
  </ThemeProvider>
)

App.propTypes = {
  children: PropTypes.node.isRequired,
}

export default App
