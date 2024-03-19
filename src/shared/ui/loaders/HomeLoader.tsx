import React from 'react'
import ContentLoader from 'react-content-loader'

const HomeLoader = props => {
  return (
    <ContentLoader
      speed={2}
      width={'100%'}
      height={500}
      viewBox="0 0 400 500"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}
    >
      <rect x="10" y="10" rx="3" ry="3" width="80" height="15" />
      <rect x="14" y="150" rx="3" ry="3" width="90" height="11" />
      <rect x="10" y="40" rx="15" ry="15" width="100" height="100" />
      <rect x="10" y="370" rx="15" ry="15" width="380" height="130" />
      <rect x="10" y="180" rx="15" ry="15" width="380" height="150" />
      <rect x="10" y="350" rx="3" ry="3" width="180" height="11" />
      <rect x="117" y="7" rx="0" ry="0" width="1" height="0" />
      <rect x="130" y="40" rx="15" ry="15" width="100" height="100" />
      <rect x="135" y="150" rx="3" ry="3" width="90" height="11" />
      <rect x="250" y="40" rx="15" ry="15" width="100" height="100" />
      <rect x="257" y="150" rx="3" ry="3" width="90" height="11" />
    </ContentLoader>
  )
}

export default HomeLoader