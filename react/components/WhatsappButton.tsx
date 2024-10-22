import React from 'react'
import PropTypes from 'prop-types'
import { useCssHandles } from 'vtex.css-handles'
import './styles.css'

type Props = {
  logo: string // WhatsApp.png
  text: string // texto al lado del icono
  phone: string // 3507064545
  message: string // Estás comunicándote con VTEX University, por favor ingresa tu duda.
  width: number // 80px
  height: number // 80px
}

const WhatsappButton = ({
  logo,
  text,
  phone,
  message,
  width,
  height,
}: Props) => {
  const CSS_HANDLES = [
    'containerWhatsapp',
    'containerLink',
    'containerIcon',
    'containerText',
  ]

  const handles = useCssHandles(CSS_HANDLES)
  const formattedMessage = message.replace(/ /g, '%20')

  return (
    <>
      <div className={handles.containerWhatsapp}>
        <a
          href={`https://wa.me/${phone}?text=${formattedMessage}`}
          target="_blank"
          rel="noreferrer noopener"
          className={handles.containerLink}
        >
          <img
            src={logo}
            width={width}
            height={height}
            alt="Logo de WhatsAp"
            className={handles.containerIcon}
          />
          <p className={handles.containerText}>{text}</p>
        </a>
      </div>
    </>
  )
}

WhatsappButton.propTypes = {
  logo: PropTypes.string.isRequired,
  text: PropTypes.string,
  phone: PropTypes.string.isRequired,
  message: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
}

WhatsappButton.defaultProps = {
  logo: '/arquivos/WhatsappBtn.svg',
  text: '',
  phone: '3126500854',
  message:
    'Hola 🤩, te comunicas con TALL Medias & Shapewear, cuéntanos en qué podemos ayudarte.',
  width: 32.05,
  height: 31.85,
}

WhatsappButton.schema = {
  title: 'Botón de WhatsApp',
  type: 'object',
  properties: {
    logo: {
      title: 'Logo de WhatsApp que se relacione con la marca',
      type: 'string',
      widget: {
        'ui:widget': 'image-uploader',
      },
    },
    text: {
      title: 'Texto junto al icono de whatsapp',
      description: 'Agrega el texto que va junto al icono de whatsapp',
      type: 'string',
      widget: {
        'ui:widget': 'textarea',
      },
    },
    phone: {
      title: 'Teléfono',
      description: 'Agrega por favor el número de teléfono',
      type: 'string',
    },
    message: {
      title: 'Mensaje que recibe el cliente',
      description: 'Agrega por favor el mensaje que se verá para tu cliente',
      type: 'string',
      widget: {
        'ui:widget': 'textarea',
      },
    },
  },
}

export default WhatsappButton
