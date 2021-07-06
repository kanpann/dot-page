import { Category } from '../site.config'

export type CategoryType = typeof Category
export type CategoryItem = {
  isSub: boolean
  sub: string[]
  url: string
}
