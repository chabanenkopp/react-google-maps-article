import React from 'react'
import { MessageContext } from './FeedbackMessageProvider'

const useMessage = () => React.useContext(MessageContext)

export default useMessage
