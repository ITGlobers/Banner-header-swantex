/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-console */
import React, { useState, useContext } from 'react'

import { categorySelected } from '../NavbarCustom/NavbarCustom'
import Image from './components/Images'
import { PropsCategory } from './types'

const ImagesCategory = ({
  brand,
  category,
  firstImage,
  secondImage,
}: PropsCategory) => {
  const categoryOnSelected = useContext(categorySelected)
  const [currentCategory] = useState<string>(category)

  const normalizeWord = (word: string) => {
    if (word === undefined) return '/'
    const wordTrimmedAndLowerCase = word?.trim().toLowerCase()
    const changewordN = wordTrimmedAndLowerCase.replace(/ñ/g, 'n')
    const removingSpaces = changewordN.replace(/\s+/g, '-')
    let removingDashes = removingSpaces.replace(/\//g, '-')

    removingDashes = removingDashes
      .replace(/[áàäâ]/g, 'a')
      .replace(/[éèëê]/g, 'e')
      .replace(/[íìïî]/g, 'i')
      .replace(/[óòöô]/g, 'o')
      .replace(/[úùüû]/g, 'u')

    return removingDashes
  }

  return (
    <>
      {currentCategory === categoryOnSelected ? (
        <>
          {firstImage?.activeImage ? (
            <Image
              url={
                firstImage?.url
                  ? firstImage?.url
                  : `/${normalizeWord(brand)}/${normalizeWord(
                      currentCategory
                    )}/${normalizeWord(firstImage?.title)}`
              }
              newTab={firstImage?.url ? '_blank' : ''}
              src={firstImage?.image}
              title={firstImage?.title}
              description={firstImage?.description}
            />
          ) : null}
          {secondImage?.activeImage ? (
            <Image
              url={
                secondImage?.url
                  ? secondImage?.url
                  : `/${normalizeWord(brand)}/${normalizeWord(
                      currentCategory
                    )}/${normalizeWord(secondImage?.title)}`
              }
              newTab={secondImage?.url ? '_blank' : ''}
              src={secondImage?.image}
              title={secondImage?.title}
              description={secondImage?.description}
            />
          ) : null}
        </>
      ) : null}
    </>
  )
}

ImagesCategory.schema = {
  title: 'Seleccion de imagenes por categoria',
  type: 'object',
  properties: {
    firstImage: {
      title: 'Imagen de seccion',
      type: 'object',
      properties: {
        activeImage: {
          type: 'boolean',
          title: 'Activa la imagen 1',
          default: false,
        },
        title: {
          type: 'string',
          title: 'Categoria',
          description:
            'En esta seccion se debe colocar el nombre de la categoria',
        },
        description: {
          type: 'string',
          title: 'Descripcion',
          description: 'Pequeño parrafo de descripcion debajo la imagen',
        },
        url: {
          type: 'string',
          title: 'URL',
          description: 'URL opcional (Deshabilita el enlace por defecto)',
        },
        image: {
          title: 'Imagen',
          default: '',
          type: 'string',
          widget: {
            'ui:widget': 'image-uploader',
          },
        },
      },
    },
    secondImage: {
      title: 'Imagen de seccion',
      type: 'object',
      properties: {
        activeImage: {
          type: 'boolean',
          title: 'Activa la imagen 2',
          default: false,
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
        url: {
          type: 'string',
          title: 'URL',
          description: 'URL opcional (Deshabilita el enlace por defecto)',
        },
        image: {
          title: 'Imagen',
          default: '',
          type: 'string',
          widget: {
            'ui:widget': 'image-uploader',
          },
        },
      },
    },
  },
}

export default ImagesCategory
