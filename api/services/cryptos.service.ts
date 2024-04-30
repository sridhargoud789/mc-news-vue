import { Router } from 'express'
import axios from 'axios'

import { CryptoResponseInterface } from '../interfaces/crypto.response.interface'
import { transformCryptoResponseToCryptoModel } from '../converters'
import { CryptoModel } from '../models/crypto.model'

const router = Router()

export const topForty = router.use('/top-40/index.json', async (req, res) => {
  const resource: string = 'v1/cryptocurrencies'

  const response = await axios
    .get(
      //`https://api.mundocrypto.com/api/${resource}?top-tokenomics&page=1&per_page=40`
      `https://api.mundocrypto.com/api/${resource}/top-cryptos?page=1&per_page=40`
    )
    .then((resp) => resp.data)
    .catch((error) => {
      console.log(error)
    })
  const cryptos = response!.cryptos!.data ?? []
  const cryptosModel: CryptoModel[] | undefined = cryptos.map(
    (crypto: CryptoResponseInterface) =>
      transformCryptoResponseToCryptoModel(crypto)
  )
  const cryptoModel: CryptoModel = new CryptoModel({ id: 0 })
  // Generate the time of the response to verify ISR
  cryptoModel.random = new Date().getTime().toString()
  res.writeHead(200, { 'Content-Type': 'application/json' })

  res.end(
    JSON.stringify({
      cryptoModel,
      cryptosModel,
      code: 1,
    })
  )
})

export const topHundred = router.use(
  '/top-100/index.json',
  async (req, res) => {
    const resource: string = 'v1/cryptocurrencies'

    const response = await axios
      .get(
        `https://api.mundocrypto.com/api/${resource}/top-cryptos?page=1&per_page=20`
      )
      .then((resp) => resp.data)
      .catch((error) => {
        console.log(error)
      })
    console.log(response);
    const cryptos = response!.cryptos!.data ?? []
    const cryptosModel: CryptoModel[] | undefined = cryptos.map(
      (crypto: CryptoResponseInterface) =>
        transformCryptoResponseToCryptoModel(crypto)
    )
    const cryptoModel: CryptoModel = new CryptoModel({ id: 0 })
    // Generate the time of the response to verify ISR
    cryptoModel.random = new Date().getTime().toString()
    res.writeHead(200, { 'Content-Type': 'application/json' })

    res.end(
      JSON.stringify({
        cryptoModel,
        cryptosModel,
        code: 1,
      })
    )
  }
)
