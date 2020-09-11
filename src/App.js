import React from 'react'
import PropTypes from 'prop-types'

const App = ({greeting, subTitle}) => {
  // const greeting = 'Hola universo'
  return (
    <>
      <h1>{greeting}</h1>
      <p>{subTitle}</p>
    </>
  )
}

App.propTypes = {
  greeting: PropTypes.string.isRequired
}

App.defaultProps = {
  subTitle: 'Lorem ipsum dolor repudiandae debitis molestiae illo nobis dolorum esse Voluptate'
}

export default App