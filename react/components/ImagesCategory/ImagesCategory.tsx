import React from "react"

const ImagesCategory = () => {
  return(
    <>
      Images
    </>
  )
}

ImagesCategory.schema ={
  image: {
    title: 'Image Prop',
    type: 'object',
    properties: {
      activeImages:{
          type: 'boolean',
          title: 'Activa la imagen',
          default: false,
      },
      category:{
        type: 'string',
        title: 'Categoria',
        description: 'Selecciona la categoria correspondiente',
        enum: ['red', 'blue', 'black']
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

export default ImagesCategory
