import { scroller } from 'react-scroll'

export const scrollIntoView = ({ name, offset = 0 }) => {
  scroller.scrollTo(name, {
    duration: 800,
    delay: 0,
    smooth: 'easeInOutQuart',
    offset,
  })
}
