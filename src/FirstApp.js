import React from 'react'
import PropTypes from 'prop-types'

const FirstApp = ({greeting, subTitle}) => {
  // const greeting = 'Hola universo'
  return (
    <>
      <h1>{greeting}</h1>
      <p>{subTitle}</p>
    </>
  )
}

FirstApp.propTypes = {
  greeting: PropTypes.string.isRequired
}

FirstApp.defaultProps = {
  subTitle: 'Lorem ipsum dolor repudiandae debitis molestiae illo nobis dolorum esse Voluptate'
}

export default FirstApp