export async function fetchItems(query, setSearchedItems, condition, start) {
  let URL = `https://shopping.yahooapis.jp/ShoppingWebService/V3/itemSearch?appid=${process.env.REACT_APP_API_KEY}&query=${query}&sort=-score&results=25`

  condition == 'new'
    ? (URL = `https://shopping.yahooapis.jp/ShoppingWebService/V3/itemSearch?appid=${process.env.REACT_APP_API_KEY}&query=${query}&sort=-score&results=25&condition=new&start=${start}`)
    : (URL = `https://shopping.yahooapis.jp/ShoppingWebService/V3/itemSearch?appid=${process.env.REACT_APP_API_KEY}&query=${query}&sort=-score&results=25&start=${start}`)
  condition == 'used'
    ? (URL = `https://shopping.yahooapis.jp/ShoppingWebService/V3/itemSearch?appid=${process.env.REACT_APP_API_KEY}&query=${query}&results=25&in_stock=true&condition=used&start=${start}`)
    : (URL = `https://shopping.yahooapis.jp/ShoppingWebService/V3/itemSearch?appid=${process.env.REACT_APP_API_KEY}&query=${query}&sort=-score&results=25&start=${start}`)
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
      console.log(data.ResultSet['0'].Result['0'])
      setItemDetail(data.ResultSet['0'].Result['0'])
    })
}

export async function fetchAllItems() {
  const URL =
    'https://circus.shopping.yahooapis.jp/ShoppingWebService/V1/myItemList?seller_id=teststore&start=1&results=50&query=%BE%A6%C9%CA%A3%B1&type=name&sort=%2Bitem_code'

  let response = await fetch(URL, { mode: 'cors' })

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`)
  } else {
    let data = await response.json()
    return data
  }
}

export async function fetchPopularKeywords() {
  const type = 'ranking'
  await fetch(
    `https://shopping.yahooapis.jp/ShoppingWebService/V2/queryRanking?appid=${process.env.REACT_APP_API_KEY}&type=${type}`,
    { mode: 'cors' },
  )
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      console.log(data)
    })
}

// export aync function trendingItems
