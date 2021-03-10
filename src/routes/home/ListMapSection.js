import React from 'react'
import styled from 'styled-components'
import { rem } from 'polished'
import { SPACE } from 'Theme'
import { Flex, Box } from 'components/Layout'
import Map from './Map'
import Card from './Card'
import { MOCK_ORIGINS_DATA, MOCK_DESTINATIONS_DATA } from './data'

const CONTENT_WIDTH = rem('675px')

const ListWrapper = styled('div')`
  flex: 1;
  min-width: 0;
  max-width: ${CONTENT_WIDTH};
`

const List = styled('div')`
  width: 100%;
  margin-left: auto;
  padding: 0 ${SPACE.M} ${SPACE.M} ${SPACE.M};
  max-width: ${CONTENT_WIDTH};
`

const ListMapSection = () => {
  const [hoveredOriginId, setHoveredOriginId] = React.useState(null)
  return (
    <Flex>
      <ListWrapper>
        <List>
          {MOCK_ORIGINS_DATA.map((originData) => (
            <Card
              key={originData.id}
              onHover={setHoveredOriginId}
              {...originData}
            />
          ))}
        </List>
      </ListWrapper>
      <Box flex={1}>
        <Map
          origins={MOCK_ORIGINS_DATA}
          destinations={MOCK_DESTINATIONS_DATA}
          hoveredOriginId={hoveredOriginId}
        />
      </Box>
    </Flex>
  )
}

export default ListMapSection
