import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { rem } from 'polished'
import { SPACE, COLOR } from 'Theme'
import { Text } from 'components/Typography'
import Transition, { TRANSITION_STATE } from 'components/Transition'
import CloseIcon from 'images/svg/close.inline.svg'

const DURATION = 300
const TIMEOUT = 3000
const CONTAINER_PADDING_HORIZONTAL = rem(40)
const DEFAULT_STATES = {
  [TRANSITION_STATE.EXITED]: 0,
  [TRANSITION_STATE.EXITING]: 0,
  [TRANSITION_STATE.ENTERED]: 1,
  [TRANSITION_STATE.ENTERING]: 1,
}

const Container = styled('div')`
  z-index: 1;
  position: fixed;
  bottom: 0;
  width: 100vw;
  background-color: ${COLOR.DUSK_ORANGE};
  padding: ${SPACE.M} ${CONTAINER_PADDING_HORIZONTAL};
  transition: opacity ${DURATION}ms ease-in-out;
  ${({ transitionState }) => `opacity: ${DEFAULT_STATES[transitionState]};`}
`

const IconWrapper = styled('div')`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: ${SPACE.M};
  cursor: pointer;
`

const ErrorMessage = ({ children, isVisible, onDismiss }) => {
  React.useEffect(() => {
    let timeout
    if (isVisible) {
      timeout = setTimeout(() => onDismiss(), TIMEOUT)
    }
    return () => clearTimeout(timeout)
  }, [isVisible, onDismiss])
  return (
    <Transition in={isVisible} timeout={DURATION} mountOnEnter unmountOnExit>
      {(state) => (
        <Container transitionState={state}>
          <IconWrapper onClick={onDismiss}>
            <CloseIcon />
          </IconWrapper>
          <Text as="p" textAlign="center" color={COLOR.BLACK}>
            {children}
          </Text>
        </Container>
      )}
    </Transition>
  )
}

ErrorMessage.propTypes = {
  isVisible: PropTypes.bool,
  onDismiss: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
}

export default ErrorMessage
