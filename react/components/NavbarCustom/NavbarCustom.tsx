import React from "react"
import { useCssHandles } from "vtex.css-handles"



const NavbarCustom = () => {

  const CSS_HANDLES = [
    "navbar-container"
  ] as const
  const handles = useCssHandles(CSS_HANDLES)

  return(
    <div className={handles["navbar-container"]}>
      <div>
        Deportivos
      </div>
      <div>
        Deportivos
      </div>
      <div>
        Deportivos
      </div>
      <div>
        Deportivos
      </div>
      <div>
        Deportivos
      </div>
    </div>
  )
}

export default NavbarCustom
