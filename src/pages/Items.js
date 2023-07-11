import { Typography, Box } from '@mui/material'
import { useEffect, useState } from 'react'
import { fetchItems } from '../services/fetchApi'
import { fetchPopularKeywords } from '../services/fetchApi'
import * as React from 'react'
import ItemCard from '../components/ItemCard'

const Items = () => {
  const [searchedItems, setSearchedItems] = useState()

  useEffect(() => {
    fetchItems(setSearchedItems)
    fetchPopularKeywords()
  }, [])

  useEffect(() => {
    if (searchedItems) {
      console.log(searchedItems.hits)
    }
  }, [searchedItems])
  return (
    <>
      <Typography>商品一覧</Typography>
      {searchedItems &&
        searchedItems.hits.map((item, index) => {
          return (
            <Box key={index} sx={{ margin: '10px' }}>
              <ItemCard item={item} />
            </Box>
          )
        })}
    </>
  )
}

export default Items
