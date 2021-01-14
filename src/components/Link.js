import styled from 'styled-components'
import { Text } from 'components/Typography'

const Link = styled(Text)`
  cursor: pointer;
  text-decoration: none;
`

Link.defaultProps = {
  as: 'a',
}

export default Link
