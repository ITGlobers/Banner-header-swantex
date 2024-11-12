import { PropsWithChildren } from 'react'

export type Props = PropsWithChildren<{
  brand: string
  activeImages: boolean
  image: string
}>

export type Items = {
  id: number
  name: string
  hasChildren: boolean
}

export type OptionsToShow = {
  hasChildren: boolean
  id: number | undefined
  url: string
  name: string
  children: []
}

export type ChildrenOptions = {
  MetaTagDescription: string
  Title: string
  children: []
  hasChildren: boolean
  id: number
  name: string
  url: string
}

export type Options = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [x: string]: any
  [key: number]: {
    MetaTagDescription: string
    Title: string
    children: []
    hasChildren: boolean
    id: number
    name: string
    url: string
  }
}
