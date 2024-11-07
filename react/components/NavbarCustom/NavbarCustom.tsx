import React, { useState, useEffect } from "react"
import { useCssHandles } from "vtex.css-handles"
import { getCategories } from "./services/Categories";
import { Props, Items, OptionsToShow } from "./types";
import IconMenu from "./components/IconMenu";
import IconClose from "./components/IconClose";

const NavbarCustom = ({ brand, children } : Props) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [options, setOptions] = useState<any>([])
  const [currentBrand, setCurrentBrand] = useState(brand)
  const [currentCategory, setCurrentCategory] = useState<any>()
  const [secondOptions, setSecondOptions] = useState([])

  useEffect(() => {
    getCategories().then((items) => {
      const categories = items.find((item : Items) =>  item.name == currentBrand)
      setOptions(categories.children)
      setCurrentBrand(categories.name)
    } )
  }, [currentBrand]);

  const CSS_HANDLES = [
    "navbar-container",
    "navbar-item",
    "navbar-item__button",
    "navbar-slider__open",
    "navbar-slider__close",
    "navbar-menu-container",
    "navbar-menu-layout",
    "navbar-menu-categories",
    "navbar-menu-graphic-section",
    "navbar-menu__close-button",
    "navbar-item__anchor",
    "close-icon",
    "navbar-menu-showAll",
    "navbar-menu-image-container",
    "menu-image-title",
    "menu-image-description"
  ] as const

  const handles = useCssHandles(CSS_HANDLES)

  const handler = (state : boolean, currentItem: number) => {
    const optionsToShow = options.filter((items: OptionsToShow) =>
      items.id === currentItem && items.hasChildren === true
    )
    const showAllOption = options.filter((items: { id: any; }) => items.id === currentItem)
    setIsActive(state)
    setCurrentCategory(showAllOption[0])
    setSecondOptions(optionsToShow[0].children)
  }

  return(
    <>
      {console.log("options =>", options)}
      {console.log(secondOptions)}
      <div className={handles["navbar-container"]}>
        {options.map((option: any) =>
          <div className={handles["navbar-item"]} key={option.id}>
            {option.hasChildren === true ?
              <button className={handles["navbar-item__button"]} onClick={() => handler(true, option.id)} onMouseEnter={() => handler(true, option.id)}>
                {option.name} <IconMenu/>
              </button> :
              <a
              className={handles["navbar-item__anchor"]}
              onMouseEnter={() => {handler(false, option.id) }}
              key={option.id}
              href={option.url}
              >{option.name}</a>
            }
          </div>
        )}
      </div>
      <div className={isActive ? handles["navbar-slider__open"] : handles["navbar-slider__close"]} onMouseLeave={() => handler(false, 0)} >
        <div className={handles["navbar-menu-container"]}>
          <div className={handles["navbar-menu__close-button"]}>
            <button className={handles["close-icon"]} onClick={() => handler(false, 0)} ><IconClose/></button>
          </div>
          <div className={handles["navbar-menu-layout"]}>
            <div className={handles["navbar-menu-categories"]}>
              {secondOptions.map((option: any) =>
                <div key={option.id}>
                  <a href={option.url}>{option.name}</a>
                </div>
              )}
              <div>
                <a className={handles["navbar-menu-showAll"]} href={currentCategory?.url}>{`Ver todos ${currentCategory?.name}`}</a>
              </div>
            </div>
            <div className={handles["navbar-menu-graphic-section"]}>
                { children }
                <div className={handles["navbar-menu-image-container"]}>
                  <a href="/">
                    <img src="https://swantex.vtexassets.com/arquivos/1-IMAGEN-CATEGORIA-DESPLEGABLE.jpg" alt="ImageExample" />
                    <p className={handles["menu-image-title"]}>Tobillera</p>
                    <p className={handles["menu-image-description"]}>Suave y confortable tobillera Seducción  fabricada en tejido de punto elástico</p>
                  </a>
                </div>
                <div className={handles["navbar-menu-image-container"]}>
                  <a href="/">
                    <img src="https://swantex.vtexassets.com/arquivos/2-IMAGEN-CATEGORIA-DESPLEGABLE.jpg" alt="ImageExample" />
                    <p className={handles["menu-image-title"]}>Tobillera</p>
                    <p className={handles["menu-image-description"]}>Suave y confortable tobillera Seducción  fabricada en tejido de punto elástico</p>
                  </a>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}


NavbarCustom.schema = {
  title: "Menu",
  type: "object",
  properties: {
      brand: {
        title: "Marca",
        type: "string",
        description: "Esta propiedad no debe ser movidad ya que determina el menu por cada marca"
      },
      graphicSection: {
        title: 'Seleccion de imagenes por categoria',
        type: 'object',
        properties: {
          firstImage: {
            title: 'Imagen de seccion',
            type: 'object',
            properties: {
              activeImage:{
                type: 'boolean',
                title: 'Activa la imagen 1',
                default: false,
              },
              category:{
                type: 'string',
                title: 'Categoria',
                description: 'Selecciona la categoria correspondiente',
                enum: ['red', 'blue', 'black']
              },
              title: {
                type: 'string',
                title: 'Titulo',
                description: 'Esta desplega el titulo debajo la imagen',
              },
              description: {
                type: 'string',
                title: 'Descripcion',
                description: 'Pequeño parrafo de descripcion debajo la imagen',
              },
              url:{
                type: 'string',
                title: 'URL',
                description: 'URL opcional (Deshabilita el enlace por defecto)',
              },
              image :{
                title: 'Imagen',
                default: '',
                type: 'string',
                widget: {
                    "ui:widget": "image-uploader"
                }
              },
            }
          },
          secondImage: {
            title: 'Imagen de seccion',
            type: 'object',
            properties: {
              activeImage:{
                type: 'boolean',
                title: 'Activa la imagen 1',
                default: false,
              },
              category:{
                type: 'string',
                title: 'Categoria',
                description: 'Selecciona la categoria correspondiente',
                enum: ['red', 'blue', 'black']
              },
              title: {
                type: 'string',
                title: 'Titulo',
                description: 'Esta desplega el titulo debajo la imagen',
              },
              description: {
                type: 'string',
                title: 'Descripcion',
                description: 'Pequeño parrafo de descripcion debajo la imagen',
              },
              url:{
                type: 'string',
                title: 'URL',
                description: 'URL opcional (Deshabilita el enlace por defecto)',
              },
              image :{
                title: 'Imagen',
                default: '',
                type: 'string',
                widget: {
                    "ui:widget": "image-uploader"
                }
              },
            }
          }
        }
      }
  }
}

export default NavbarCustom;
