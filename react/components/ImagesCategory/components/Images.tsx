import React from 'react'
import { useCssHandles } from 'vtex.css-handles'

import { PropsImage } from '../types'

const Image = ({ url, src, title, description }: PropsImage) => {
  const CSS_HANDLES = [
    'navbar-menu-image-container',
    'menu-image-title',
    'menu-image-description',
  ] as const

  const handles = useCssHandles(CSS_HANDLES)

  return (
    <>
      <div className={handles['navbar-menu-image-container']}>
        <a href={url}>
          <img src={src} alt={`Imagen-${title}`} />
          <span className={handles['menu-image-title']}>{title}</span>
          <span className={handles['menu-image-description']}>
            {description}
          </span>
        </a>
      </div>
    </>
  )
}

export default Image
