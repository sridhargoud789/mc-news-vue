import { ArticleResponseInterface } from "./article.response.interface"



export interface ArticlesDataResponseInterface {
  current_page: number
  data: ArticleResponseInterface[]
  first_page_url: string
  from: number
  last_page: number
  last_page_url: string
  links: any[]
  next_page_url: string
  path: string
  per_page: string
  prev_page_url: null
  to: number
  total: number
}
