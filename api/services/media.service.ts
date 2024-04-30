import { Router } from 'express'
import axios from 'axios'

const router = Router()

export const images = router.use('/image/get_image.jpg', async (req, res) => {
    //const resource: string = 'v1/cryptocurrencies'
  
    const response = await axios
      .get(
        //`https://api.mundocrypto.com/api/${resource}?top-tokenomics&page=1&per_page=40`
        `https://mundocrypto-files.s3.eu-central-1.amazonaws.com/uploads/2022/08/22/20220822132622000000-1280x960.jpg`
      )
      .then((resp) => resp.data)
      .catch((error) => {
        console.log(error)
      })

      //console.log("response")
      const ext = "jpg";
      console.log(response)
      /*res.writeHead(200, { 'Content-Type': `image/${ext}` })
        //res.write('<html><body><img src="data:image/jpeg;base64,')
        //res.write(new Buffer(response).toString('base64'));
        res.end(response);
            
    /*             
    res.writeHead(200, { 'Content-Type': 'application/json' })
      const filename = "image.jpg"; // url 구조에 맞게 수정할 것
        const metadata = { type: `image/${ext}` };

      res.end(
          JSON.stringify({
              x : response
            })
            )

            
    const cryptos = response!.cryptos!.data ?? []
    const cryptosModel: CryptoModel[] | undefined = cryptos.map(
      (crypto: CryptoResponseInterface) =>
        transformCryptoResponseToCryptoModel(crypto)
    )
    const cryptoModel: CryptoModel = new CryptoModel({ id: 0 })
    // Generate the time of the response to verify ISR
    cryptoModel.random = new Date().getTime().toString()
    */
  })
