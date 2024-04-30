import { Router } from 'express'
import axios from 'axios'

import { transformResponseToArticleModel } from '../converters'
import { ArticleModel } from '../models/article.model'
import { ArticleResponseInterface } from '../interfaces'

const router = Router()

export const academy = router.use('/library/index.json', async (req, res) => {
  const resource = 'articles'

  const response = await axios
    .get(
      `https://api.mundocrypto.com/api/${resource}?page=1&per_page=8&reading_time_min=0&reading_time_max=16&language=ESP`
    )
    .then((resp) => resp.data)
    .catch((error) => {
      console.log(error)
    });


  const articlesList = response!.articles!.data ?? []
  const articlesModel: ArticleModel[] | undefined = articlesList.map(
    (article: ArticleResponseInterface) =>
      transformResponseToArticleModel(article)
  )
  // return articles;

  // console.log( 'articlesModel', articlesModel );

  const articleModel = new ArticleModel({ id: 0 })
  // Generate the time of the response to verify ISR
  articleModel.random = new Date().getTime().toString()
  res.writeHead(200, { 'Content-Type': 'application/json' })

  res.end(
    JSON.stringify({
      articleModel,
      articlesModel,
      code: 1,
    })
  )
})
