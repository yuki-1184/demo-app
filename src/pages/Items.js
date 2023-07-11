import { Typography, Box, Stack } from '@mui/material'
import { useEffect, useState } from 'react'
import {
  // fetchAllItems,
  fetchItems,
  fetchPopularKeywords,
} from '../services/fetchApi'
import * as React from 'react'
import ItemCard from '../components/ItemCard'

const Items = () => {
  const [searchedItems, setSearchedItems] = useState()

  useEffect(() => {
    fetchItems(setSearchedItems)
    fetchPopularKeywords()
    // fetchAllItems()
  }, [])

  useEffect(() => {
    if (searchedItems) {
      console.log(searchedItems.hits)
    }
  }, [searchedItems])
  return (
    <Box margin={5}>
      <Typography>商品一覧</Typography>
      <Stack direction={'row'} overflow={'auto'}>
        {searchedItems &&
          searchedItems.hits.map((item, index) => {
            return (
              <Box key={index} sx={{ margin: '10px' }}>
                <ItemCard item={item} />
              </Box>
            )
          })}
      </Stack>
    </Box>
  )
}

export default Items
