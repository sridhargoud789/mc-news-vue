// const express = require('express')
// const app = express()
//
// const news = require('./news')
// app.use(news)
//
// if (require.main === module) {
//   const port = 3001
//   app.listen(port, () => {
//     console.log(`API server listening on port ${port}`)
//   })
// }
//
// module.exports = app

import express from "express";
import { news, categoriesNews, categoriesSubcategoriesNews, tagTag } from "./services/news.service";
import { academy } from "./services/academy.service";
import { images } from "./services/media.service";
import { topForty, topHundred } from "./services/cryptos.service";
// import { news, categoriesNews } from "./services/news.service";

const app = express();
app.use(academy);
app.use(news);
app.use(categoriesNews);
app.use(categoriesSubcategoriesNews);
app.use(tagTag);
app.use(images);
app.use(topForty);
app.use(topHundred);

if (require.main === module) {
  const port = 3001
  app.listen(port, () => {
    console.log(`API server listening on port ${port}`)
  })
}

export default app;
