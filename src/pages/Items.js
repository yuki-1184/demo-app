import { Typography, Box, Stack, Divider } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { fetchTrendingItems } from '../services/fetchApi'
import ItemCard from '../components/ItemCardSmall'

const genre_id = [1834, 17583, 14278, 22861, 48023]

const Items = () => {
  const [popularItems, setPopularItems] = useState({})

  useEffect(() => {
    genre_id.map((id) => {
      fetchTrendingItems(id, setPopularItems)
    })
  }, [])

  return (
    <Box margin={5}>
      <Typography fontSize={'24px'}>商品一覧</Typography>
      <Divider />
      {popularItems &&
        Object.values(popularItems).map((items, index) => {
          return (
            <Box key={index} sx={{ margin: '40px 0' }}>
              <Typography fontSize={'20px'}>
                {items.high_rating_trend_ranking.categories.current.title.long}
              </Typography>
              <Stack direction={'row'} overflow={'auto'}>
                {items.high_rating_trend_ranking.ranking_data.map(
                  (item, index) => {
                    return (
                      <Box key={index} sx={{ margin: '10px' }}>
                        <ItemCard item={item} />
                      </Box>
                    )
                  },
                )}
              </Stack>
            </Box>
          )
        })}
    </Box>
  )
}

export default Items
