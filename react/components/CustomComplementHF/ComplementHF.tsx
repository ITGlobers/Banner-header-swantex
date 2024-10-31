import React from 'react'
import { useProduct } from 'vtex.product-context'
import { useRuntime } from 'vtex.render-runtime'

function ComplementHF({ children }: any) {
  const tall = children[0]
  const cachet = children[1]
  const cht = children[2]
  const insolenzia = children[3]
  const productContextValue = useProduct()
  const runContext = useRuntime()
  const brand = productContextValue?.product?.brand
  const route = runContext.route.canonicalPath

  // Renderizar el componente correspondiente según la ruta
  let Component

  if (route.startsWith('/cht')) {
    Component = cht
  } else if (route.startsWith('/cachet')) {
    Component = cachet
  } else if (route.startsWith('/insolenzia')) {
    Component = insolenzia
  } else {
    Component = tall
  }

  let productComponent

  switch (brand) {
    case 'CHT MAN':
      productComponent = cht
      break

    case 'CACHET':
      productComponent = cachet
      break

    case 'INSOLENZIA':
      productComponent = insolenzia
      break

    default:
      productComponent = tall
      break
  }

  return <div>{brand === undefined ? Component : productComponent}</div>
}

export default ComplementHF
