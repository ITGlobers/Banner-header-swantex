import React from 'react'
import { useCssHandles } from "vtex.css-handles"
import { PropsImage } from '../types'


const Image = ({url, newTab, src, title, description} : PropsImage) => {

  const CSS_HANDLES = [
    "navbar-menu-image-container",
    "menu-image-title",
    "menu-image-description"
  ] as const

  const handles = useCssHandles(CSS_HANDLES)

  return (
    <>
     <div className={handles["navbar-menu-image-container"]}>
        <a href={url} target={newTab}>
          <img src={src} alt={`Imagen-${title}`} />
          <p className={handles["menu-image-title"]}>{title}</p>
          <p className={handles["menu-image-description"]}>{description}</p>
        </a>
      </div>
    </>
  )
}

export default Image
