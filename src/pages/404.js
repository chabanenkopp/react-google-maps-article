import React from 'react'
import SEO from 'components/SEO'
import GenericPage from 'components/GenericPage'

const NotFoundPage = () => (
  <GenericPage>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </GenericPage>
)

export default NotFoundPage
