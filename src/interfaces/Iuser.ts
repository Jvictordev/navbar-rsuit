import { StaticImageData } from 'next/image'

export interface Iuser {
  username: string
  password: string
}

export interface Theme {
  id: number
  img: StaticImageData
  color: string
}
