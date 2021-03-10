import React from 'react'
import Map from './Map'
import Card from './Card'
import Layout from './Layout'
import { MOCK_ORIGINS_DATA, MOCK_DESTINATIONS_DATA } from './data'

const ListMapSection = () => {
  const [hoveredOriginId, setHoveredOriginId] = React.useState(null)
  return (
    <Layout
      listContent={
        <Layout.List>
          {MOCK_ORIGINS_DATA.map((originData) => (
            <Card
              key={originData.id}
              onHover={setHoveredOriginId}
              {...originData}
            />
          ))}
        </Layout.List>
      }
      mapContent={
        <Layout.Map>
          <Map
            origins={MOCK_ORIGINS_DATA}
            destinations={MOCK_DESTINATIONS_DATA}
            hoveredOriginId={hoveredOriginId}
          />
        </Layout.Map>
      }
    />
  )
}

export default ListMapSection
