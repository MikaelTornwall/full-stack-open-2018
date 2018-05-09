import React from 'react';

const NotFound = ({message}) => {
  if (message === null) {
    return null
  }
  return (
    <div className="error">
      {message}
    </div>
  )
}

const Added = ({message}) => {
  if (message === null) {
    return null
  }
  return (
    <div className="added">
      {message}
    </div>
  )
}

export default { Added, NotFound }
