import React from 'react'
import Map from './Map'
import Card from './Card'
import Layout from './Layout'
import { MOCK_VENUES_DATA, MOCK_DESTINATIONS_DATA } from './data'

const ListMapSection = () => {
  const [hoveredVenueId, setHoveredVenueId] = React.useState(null)
  return (
    <Layout
      listContent={
        <Layout.List>
          {MOCK_VENUES_DATA.map((venueData) => (
            <Card
              key={venueData.id}
              onHover={setHoveredVenueId}
              {...venueData}
            />
          ))}
        </Layout.List>
      }
      mapContent={
        <Layout.Map>
          <Map
            origins={MOCK_VENUES_DATA}
            destinations={MOCK_DESTINATIONS_DATA}
            hoveredOriginId={hoveredVenueId}
          />
        </Layout.Map>
      }
    />
  )
}

export default ListMapSection
