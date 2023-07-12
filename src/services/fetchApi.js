export async function fetchItems(query, setSearchedItems) {
  await fetch(
    `https://shopping.yahooapis.jp/ShoppingWebService/V3/itemSearch?appid=${process.env.REACT_APP_API_KEY}&query=${query}`,
    { mode: 'cors' },
  )
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      setSearchedItems(data)
    })
}

export async function fetchAllItems() {
  const URL =
    'https://test.circus.shopping.yahooapis.jp/ShoppingWebService/V1/getItem?seller_id=teststore&item_code=item1'
  const APIKEY = process.env.REACT_APP_API_KEY

  const requestOptions = {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${APIKEY}`,
    },
    mode: 'cors',
  }

  let response = await fetch(URL, requestOptions)

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
