import { Router } from 'express'
import axios from 'axios'

import { transformNewToNewModel } from '../converters'
import { NewModel } from '../models/new.model'
import { New } from '../interfaces'

const router = Router()

export const news = router.use('/news/:aid.json', async (req, res) => {
  const aid = req.params.aid
  if (aid !== 'error') {
    const resource = 'notice'

    const verify = await axios
      .get(`https://api.mundocrypto.com/api/${resource}/verify/${aid}`)
      .then((resp) => resp.data)
      .catch((error) => {
        console.log(error)
      })

    let isNotice = true
    if (!verify || verify === '') {
      isNotice = false
    }

    let newModel: NewModel
    let newsModel: NewModel[] | undefined
    const resources = 'notices'

    if (isNotice) {
      const response = await axios

        .get(`https://api.mundocrypto.com/api/${resource}/${aid}`)

        .then((resp) => resp.data)
        .catch((error) => {
          console.log(error)
        })
      const newResponse = response.notice
      newModel = transformNewToNewModel(newResponse)

      const category = newModel.category.slug

      const responses = await axios
        .get(

          `https://api.mundocrypto.com/api/${resources}?category_slug=${category}&page=1&per_page=10&language=ESP`

        )
        .then((resp) => resp.data)
        .catch((error) => {
          console.log(error)
        })
      const newsList = responses!.notices!.data ?? []
      newsModel = newsList.map((element: New) =>
        transformNewToNewModel(element)
      )
      newsModel = responses!.notices!.data ? newsModel : []
    } else {
      newModel = new NewModel({ id: 0 })
      const response = await axios
        .get(
          `https://api.mundocrypto.com/api/${resources}?category_slug=${aid}&page=1&per_page=10&language=ESP`
        )
        .then((resp) => resp.data)
        .catch((error) => {
          console.log(error)
        })

      const newsList = response!.notices!.data ?? []
      newsModel = newsList.map((element: New) =>
        transformNewToNewModel(element)
      )
    }

    // Generate the time of the response to verify ISR
    newModel.random = new Date().getTime().toString()
    res.writeHead(200, { 'Content-Type': 'application/json' })

    res.end(
      JSON.stringify({
        newModel,
        newsModel,
        code: 1,
        isNotice,
      })
    )
  }
})

export const categoriesNews = router.use(
  '/news/:aid/:slug.json',
  async (req, res) => {
    const slug = req.params.slug
    if (slug !== 'error') {
      const resource = 'notice'

      const verify = await axios
        .get(
          `https://api.mundocrypto.com/api/${resource}/verify/${slug}`
        )
        .then((resp) => resp.data)
        .catch((error) => {
          console.log(error)
        })

      let isNotice = true
      if (!verify || verify === '') {
        isNotice = false
      }

      let newModel: NewModel
      let newsModel: NewModel[] | undefined
      const resources = 'notices'

      if (isNotice) {
        const response = await axios
          .get(`https://api.mundocrypto.com/api/${resource}/${slug}`)
          .then((resp) => resp.data)
          .catch((error) => {
            console.log(error)
          })
        const newResponse = response.notice
        newModel = transformNewToNewModel(newResponse)

        const category = newModel.category.slug

        const responses = await axios
          .get(
            `https://api.mundocrypto.com/api/${resources}?category_slug=${category}&page=1&per_page=10&language=ESP`
          )
          .then((resp) => resp.data)
          .catch((error) => {
            console.log(error)
          })
        const newsList = responses!.notices!.data ?? []
        newsModel = newsList.map((element: New) =>
          transformNewToNewModel(element)
        )
        newsModel = responses!.notices!.data ? newsModel : []
      } else {
        newModel = new NewModel({ id: 0 })
        const response = await axios
          .get(
            `https://api.mundocrypto.com/api/${resources}?subcategory_slug=${slug}&page=1&per_page=10&language=ESP`
          )
          .then((resp) => resp.data)
          .catch((error) => {
            console.log(error)
          })

        const newsList = response!.notices!.data ?? []
        newsModel = newsList.map((element: New) =>
          transformNewToNewModel(element)
        )
      }

      // Generate the time of the response to verify ISR
      newModel.random = new Date().getTime().toString()
      res.writeHead(200, { 'Content-Type': 'application/json' })

      res.end(
        JSON.stringify({
          newModel,
          newsModel,
          code: 1,
          isNotice,
        })
      )
    }
  }
)

export const categoriesSubcategoriesNews = router.use(
  '/news/:aid/:slug/:notice.json',
  async (req, res) => {
    const aid = req.params.notice
    if (aid !== 'error') {
      const resource = 'notice'

      const verify = await axios
        .get(
          `https://api.mundocrypto.com/api/${resource}/verify/${aid}`
        )
        .then((resp) => resp.data)
        .catch((error) => {
          console.log(error)
        })

      let isNotice = true
      if (!verify || verify === '') {
        isNotice = false
      }

      let newModel: NewModel
      let newsModel: NewModel[] | undefined
      const resources = 'notices'

      if (isNotice) {
        const response = await axios
          .get(`https://api.mundocrypto.com/api/${resource}/${aid}`)
          .then((resp) => resp.data)
          .catch((error) => {
            console.log(error)
          })
        const newResponse = response.notice
        newModel = transformNewToNewModel(newResponse)

        const category = newModel.category.slug

        const responses = await axios
          .get(
            `https://api.mundocrypto.com/api/${resources}?category_slug=${category}&page=1&per_page=10&language=ESP`
          )
          .then((resp) => resp.data)
          .catch((error) => {
            console.log(error)
          })
        const newsList = responses!.notices!.data ?? []
        newsModel = newsList.map((element: New) =>
          transformNewToNewModel(element)
        )
        newsModel = responses!.notices!.data ? newsModel : []
      } else {
        newModel = new NewModel({ id: 0 })
        const response = await axios
          .get(
            `https://api.mundocrypto.com/api/${resources}?subcategory_slug=${aid}&page=1&per_page=10&language=ESP`
          )
          .then((resp) => resp.data)
          .catch((error) => {
            console.log(error)
          })

        const newsList = response!.notices!.data ?? []
        newsModel = newsList.map((element: New) =>
          transformNewToNewModel(element)
        )
      }

      // Generate the time of the response to verify ISR
      newModel.random = new Date().getTime().toString()
      res.writeHead(200, { 'Content-Type': 'application/json' })

      res.end(
        JSON.stringify({
          newModel,
          newsModel,
          code: 1,
          isNotice,
        })
      )
    }
  }
)

export const tagTag = router.use('/tag/:tag.json', async (req, res) => {
  const tag = req.params.tag
  if (tag !== 'error') {
    const newModel: NewModel = new NewModel({ id: 0 })
    const resources = 'notices'
    const response = await axios
      .get(
        `https://api.mundocrypto.com/api/${resources}?tag_slug=${tag}&page=1&per_page=10&language=ESP`
      )
      .then((resp) => resp.data)
      .catch((error) => {
        console.log(error)
      })

    const newsList = response!.notices!.data ?? []
    const newsModel: NewModel[] | undefined = newsList.map((element: New) => transformNewToNewModel(element));
    // Generate the time of the response to verify ISR
    newModel.random = new Date().getTime().toString()
    res.writeHead(200, { 'Content-Type': 'application/json' })

    res.end(
      JSON.stringify({
        newModel,
        newsModel,
        code: 1,
      })
    )
  }
})
