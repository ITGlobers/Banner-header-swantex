import React from 'react'
import { useProduct } from 'vtex.product-context'
import { useRuntime } from 'vtex.render-runtime'

import BannerMain from './Banners/BannerMain'
import BannerCht from './Banners/BannerCht'
import BannerCachet from './Banners/BannerCachet'
import BannerInsolenzia from './Banners/BannerInsolenzia'

function HeaderBanner() {
  const productContextValue = useProduct()
  const runContext = useRuntime()
  const brand = productContextValue?.product?.brand
  const route = runContext.route.canonicalPath

  let Component

  if (route.startsWith('/cht')) {
    Component = <BannerCht />
  } else if (route.startsWith('/cachet')) {
    Component = <BannerCachet />
  } else if (route.startsWith('/insolenzia')) {
    Component = <BannerInsolenzia />
  } else {
    Component = <BannerMain />
  }

  let productComponent

  switch (brand) {
    case 'CHT MAN':
      productComponent = <BannerCht />
      break

    case 'CACHET':
      productComponent = <BannerCachet />
      break

    case 'INSOLENZIA':
      productComponent = <BannerInsolenzia />
      break

    default:
      productComponent = <BannerMain />
      break
  }

  return <div>{brand === undefined ? Component : productComponent}</div>
}

export default HeaderBanner
