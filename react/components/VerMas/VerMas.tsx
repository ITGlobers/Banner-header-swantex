import React, { useState } from 'react'
import { useCssHandles } from 'vtex.css-handles'
import '../styles.css'

function VerMas({ children }: any) {
  const [show, setShow] = useState(true)
  const CSS_HANDLES = ['HiddenText', 'ShowText', 'ButtonShowMore']

  const handles = useCssHandles(CSS_HANDLES)

  function handleChange() {
    setShow(!show)
  }

  const childrenPlus =
    typeof children === 'string' ? `${children}...` : children

  return (
    <>
      <div className={show ? handles.HiddenText : handles.ShowText}>
        {show ? childrenPlus : children}
      </div>
      <button className={handles.ButtonShowMore} onClick={handleChange}>
        {show ? 'Ver más' : 'Ver menos'}
      </button>
    </>
  )
}

export default VerMas
