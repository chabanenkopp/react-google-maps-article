import React from 'react'
import PropTypes from 'prop-types'
import ErrorMessage from 'components/ErrorMessage'

export const MessageContext = React.createContext()
const DEFAULT_ERROR_MESSAGE = 'Niekde nastala chyba, skúste to neskôr, prosím'

const MessageProvider = ({ children }) => {
  const [message, setMessage] = React.useState(null)
  const setErrorMessage = React.useCallback((error) => setMessage(error), [])
  const onDismiss = React.useCallback(() => setMessage(null), [])
  return (
    <MessageContext.Provider value={{ setErrorMessage, message }}>
      {children}
      <ErrorMessage isVisible={!!message} onDismiss={onDismiss}>
        {typeof message === 'string' ? message : DEFAULT_ERROR_MESSAGE}
      </ErrorMessage>
    </MessageContext.Provider>
  )
}

MessageProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default MessageProvider
