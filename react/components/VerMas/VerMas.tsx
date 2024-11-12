import React, { useState } from 'react'
import { useCssHandles } from 'vtex.css-handles'

function VerMas({ children }: any) {
  const [show, setShow] = useState(false)
  const CSS_HANDLES = ['HiddenText', 'ShowText']

  const handles = useCssHandles(CSS_HANDLES)

  function handleChange() {
    setShow(!show)
  }

  return (
    <>
      <div className={show ? handles.HiddenText : handles.ShowText}>
        {children}
      </div>
      <button onClick={handleChange}>Ver más</button>
    </>
  )
}

export default VerMas
