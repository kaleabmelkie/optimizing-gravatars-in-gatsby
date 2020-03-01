import React from 'react'
import { toUrl } from 'gatsby-source-gravatar'
import GatsbyImage from 'gatsby-image'

const Method1 = () => {
  const url = toUrl(`email@example.com`)

  return (
    <GatsbyImage
      fluid={{
        aspectRatio: 1 / 1,
        src: `${url}?size=512`,
        srcSet: `${url}?size=256 256w, ${url}?size=512 512w`,
        sizes: `(max-width: 256px) 256px, 512px`
      }}
    />
  )
}

export default Method1
