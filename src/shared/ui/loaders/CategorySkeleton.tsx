import React from "react"
import ContentLoader from "react-content-loader"

export const CategorySkeleton = (props: never) => (
  <ContentLoader
    speed={2}
    width={100}
    height={150}
    viewBox="0 0 100 160"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="0" rx="10" ry="10" width="100" height="100" />
    <rect x="-1" y="111" rx="10" ry="10" width="100" height="10" />
  </ContentLoader>
)