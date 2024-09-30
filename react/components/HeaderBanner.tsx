import React, { useEffect, useState } from 'react'

import BannerMain from './Banners/BannerMain'
import BannerCht from './Banners/BannerCht'
import BannerCachet from './Banners/BannerCachet'
import BannerInsolenzia from './Banners/BannerInsolenzia'

function HeaderBanner() {
  const [path, setPath] = useState('')

  useEffect(() => {
    // Obtener el path actual
    setPath(window.location.pathname)
  }, [])

  return (
    <>
      {path === '/cht' ? (
        <BannerCht />
      ) : path === '/cachet' ? (
        <BannerCachet />
      ) : path === '/insolenzia' ? (
        <BannerInsolenzia />
      ) : (
        <BannerMain />
      )}
    </>
  )
}

export default HeaderBanner
