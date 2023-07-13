export async function fetchItems(
  query,
  setSearchedItems,
  condition,
  start,
  total,
) {
  let URL = `https://shopping.yahooapis.jp/ShoppingWebService/V3/itemSearch?appid=${process.env.REACT_APP_API_KEY}&query=${query}&sort=-score&results=${total}`

  condition == 'new'
    ? (URL = `https://shopping.yahooapis.jp/ShoppingWebService/V3/itemSearch?appid=${process.env.REACT_APP_API_KEY}&query=${query}&sort=-score&results=${total}&condition=new&start=${start}`)
    : (URL = `https://shopping.yahooapis.jp/ShoppingWebService/V3/itemSearch?appid=${process.env.REACT_APP_API_KEY}&query=${query}&sort=-score&results=${total}&start=${start}`)
  condition == 'used'
    ? (URL = `https://shopping.yahooapis.jp/ShoppingWebService/V3/itemSearch?appid=${process.env.REACT_APP_API_KEY}&query=${query}&in_stock=true&results=${total}&condition=used&start=${start}`)
    : (URL = `https://shopping.yahooapis.jp/ShoppingWebService/V3/itemSearch?appid=${process.env.REACT_APP_API_KEY}&query=${query}&sort=-score&results=${total}&start=${start}`)
  await fetch(URL, { mode: 'cors' })
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      console.log(data)
      setSearchedItems(data)
    })
}

export async function fetchItemDetail(itemcode, setItemDetail) {
  await fetch(
    `https://shopping.yahooapis.jp/ShoppingWebService/V1/json/itemLookup?appid=${process.env.REACT_APP_API_KEY}&itemcode=${itemcode}&image_size=600&responsegroup=large`,
    { mode: 'cors' },
  )
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      setItemDetail(data.ResultSet['0'].Result['0'])
    })
}

export async function fetchTrendingItems(genre_id, setPopularItems) {
  await fetch(
    `https://shopping.yahooapis.jp/ShoppingWebService/V1/highRatingTrendRanking?appid=${process.env.REACT_APP_API_KEY}&genre_category_id=${genre_id}&results=10`,
    { mode: 'cors' },
  )
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      setPopularItems((prevItems) => ({ ...prevItems, [genre_id]: data }))
      return data
    })
}

// export aync function trendingItems
