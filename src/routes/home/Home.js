import React from 'react'
import SEO from 'components/SEO'
import GenericPage from 'components/GenericPage'
import ListMapSection from './ListMapSection'

const Home = () => (
  <GenericPage>
    <SEO
      title=""
      description="Nauč sa nové zručnosti v našej IT akadémii v Košiciach a získaj možnosť pracovného povovoru u niektorého z našich IT partnerov."
    />
    <ListMapSection />
  </GenericPage>
)

export default Home
