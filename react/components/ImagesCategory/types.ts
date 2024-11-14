export type PropsCategory = {
  brand: string
  category: string
  firstImage: {
    activeImage: boolean
    title: string
    description: string
    url: string
    image: string
  }
  secondImage: {
    activeImage: boolean
    title: string
    description: string
    url: string
    image: string
  }
}

export type PropsImage = {
  url: string
  newTab: string
  src: string
  title: string
  description: string
}
