import React from 'react'
import icon from './death-star.jpg'

const ErrorIndicator = () => {
  return (
    <div className="error-indicator">
      <div>
        <img src={icon} alt="error-icon"/>
      </div>
      <div>
        Error.
      </div>
    </div>
  )
}
export default ErrorIndicator
