import React from 'react'

const ErrorPage = ({message, statusCode}) => {
  return (
    <div>
        <h1>{statusCode}</h1>
        <h3>{message}</h3>
    </div>
  )
}

export default ErrorPage