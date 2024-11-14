/* eslint-disable no-console */
import React, { useState, useEffect, createContext } from 'react'
import { useCssHandles } from 'vtex.css-handles'

import { getCategories } from './services/Categories'
import { Props, Items, OptionsToShow, ChildrenOptions, Options } from './types'
import IconMenu from './components/IconMenu'
import IconClose from './components/IconClose'

export const categorySelected = createContext<string | undefined>('')

const NavbarCustom = ({ brand, children }: Props) => {
  const [isActive, setIsActive] = useState<boolean>(false)
  const [options, setOptions] = useState<Options>([])
  const [currentBrand, setCurrentBrand] = useState(brand)
  const [currentCategory, setCurrentCategory] = useState<ChildrenOptions>()
  const [secondOptions, setSecondOptions] = useState([])

  useEffect(() => {
    getCategories().then((items) => {
      const categories = items.find((item: Items) => item.name === currentBrand)

      setOptions(categories.children)
      setCurrentBrand(categories.name)
    })
  }, [currentBrand])

  const CSS_HANDLES = [
    'navbar-container',
    'navbar-item',
    'navbar-item__button',
    'navbar-slider__open',
    'navbar-slider__close',
    'navbar-menu-container',
    'navbar-menu-layout',
    'navbar-menu-categories',
    'navbar-menu-graphic-section',
    'navbar-menu__close-button',
    'navbar-item__anchor',
    'close-icon',
    'navbar-menu-showAll',
  ] as const

  const handles = useCssHandles(CSS_HANDLES)

  const handler = (state: boolean, currentItem: number) => {
    const optionsToShow = options.filter(
      (items: OptionsToShow) =>
        items.id === currentItem && items.hasChildren === true
    )

    const showAllOption = options.filter(
      (items: { id: number }) => items.id === currentItem
    )

    setIsActive(state)
    setCurrentCategory(showAllOption[0])
    setSecondOptions(optionsToShow[0].children)
  }

  return (
    <>
      <div className={handles['navbar-container']}>
        {options.map((option: ChildrenOptions) => (
          <div className={handles['navbar-item']} key={option.id}>
            {option.hasChildren === true ? (
              <button
                className={handles['navbar-item__button']}
                onClick={() => handler(true, option.id)}
                onMouseEnter={() => handler(true, option.id)}
              >
                {option.name} <IconMenu />
              </button>
            ) : (
              <a
                className={handles['navbar-item__anchor']}
                onMouseEnter={() => {
                  handler(false, option.id)
                }}
                key={option.id}
                href={option.url}
              >
                {option.name}
              </a>
            )}
          </div>
        ))}
      </div>
      <div
        className={
          isActive
            ? handles['navbar-slider__open']
            : handles['navbar-slider__close']
        }
        onMouseLeave={() => handler(false, 0)}
      >
        <div className={handles['navbar-menu-container']}>
          <div className={handles['navbar-menu__close-button']}>
            <button
              className={handles['close-icon']}
              onClick={() => handler(false, 0)}
            >
              <IconClose />
            </button>
          </div>
          <div className={handles['navbar-menu-layout']}>
            <div className={handles['navbar-menu-categories']}>
              {secondOptions.map((option: ChildrenOptions) => (
                <div key={option.id}>
                  <a href={option.url}>{option.name}</a>
                </div>
              ))}
              <div>
                <a
                  className={handles['navbar-menu-showAll']}
                  href={currentCategory?.url}
                >{`Ver todo en ${currentCategory?.name}`}</a>
              </div>
            </div>
            <div className={handles['navbar-menu-graphic-section']}>
              <categorySelected.Provider value={currentCategory?.name}>
                {children}
              </categorySelected.Provider>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

NavbarCustom.schema = {
  title: 'Menu',
  type: 'object',
  properties: {
    brand: {
      title: 'Marca',
      type: 'string',
      description:
        'Esta propiedad no debe ser movidad ya que determina el menu por cada marca',
    },
  },
}

export default NavbarCustom
