import { PropsWithChildren } from "react";

export type Props = PropsWithChildren<{
  brand: string,
  activeImages: boolean,
  image: string,
}>

export type Items = {
  id: number,
  name: string,
  hasChildren: boolean
}

export type OptionsToShow = {
  hasChildren: boolean;
  id: number | undefined;
  url: string,
  name: string,
}

// type options = {
//   id: number,
//   name: string,
//   hasChildren: boolean
//   url: string
//   children: any[]
// }
