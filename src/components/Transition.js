import React from 'react'
import PropTypes from 'prop-types'
import { Transition as ReactTransition } from 'react-transition-group'

export const TRANSITION_STATE = {
  ENTERING: 'entering',
  ENTERED: 'entered',
  EXITING: 'exiting',
  EXITED: 'exited',
}

/**
 * HACK: from CSSTransitionGroup to animate newly mounted components
 * when mountOnEnter or unmountOnExit is used
 */
const forceOnEnterReflow = (node) => node && node.scrollTop

const Transition = ({ mountOnEnter, unmountOnExit, ...props }) => (
  <ReactTransition
    mountOnEnter={mountOnEnter}
    unmountOnExit={unmountOnExit}
    onEnter={forceOnEnterReflow}
    {...props}
  />
)

Transition.propTypes = {
  mountOnEnter: PropTypes.bool,
  unmountOnExit: PropTypes.bool,
}

export default Transition
