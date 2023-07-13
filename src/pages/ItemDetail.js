import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { fetchItemDetail } from '../services/fetchApi'
import {
  Box,
  Typography,
  ImageList,
  ImageListItem,
  Divider,
} from '@mui/material'
import RatingView from '../components/common/RatingView'

const ItemDetail = () => {
  const { code } = useParams()
  const [itemDetail, setItemDetail] = useState()

  useEffect(() => {
    fetchItemDetail(code.substring(1), setItemDetail)
  }, [code])

  return (
    <>
      <Box sx={{ margin: '20px 80px' }}>
        {/* <image src={itemDetail.ResultSet['0'].Result['0'].Image}></image> */}
        {itemDetail && (
          <>
            <Box sx={{ display: 'flex' }}>
              <Box>
                <img src={itemDetail.ExImage.Url} alt="Girl in a jacket"></img>
                <ImageList
                  sx={{ width: 500, height: 400 }}
                  cols={3}
                  rowHeight={164}
                >
                  {Object.values(itemDetail.RelatedImages)
                    .slice(0, -1)
                    .map((item, index) => (
                      <ImageListItem key={index}>
                        <img
                          src={`${item.Medium}?w=164&h=164&fit=crop&auto=format`}
                          srcSet={`${item.Medium}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                          alt="related images"
                          loading="lazy"
                        />
                      </ImageListItem>
                    ))}
                </ImageList>
              </Box>
              <Box sx={{ margin: '10px 20px' }}>
                <Typography fontWeight={'bold'} fontSize={'24px'}>
                  {itemDetail.Name}
                </Typography>
                <Typography color="text.secondary">
                  {itemDetail.Store.Name}
                </Typography>
                <RatingView
                  rate={itemDetail.Review.Rate}
                  count={itemDetail.Review.Count}
                />
                <Divider />
                <Box>
                  <Typography color={'text.secondary'}>
                    {itemDetail.Shipping.Name}
                  </Typography>
                  <Typography fontSize={'24px'}>
                    {itemDetail.Price._value}円 (税込)
                  </Typography>
                </Box>
                <Divider />
                <Box>
                  <Typography fontWeight={'bold'}>この商品について</Typography>
                  <Typography>
                    {itemDetail.Description.replace(/<br>/g, '\n')
                      .split('\n')
                      .map((line, index) => (
                        <React.Fragment key={index}>
                          {line}
                          <br />
                        </React.Fragment>
                      ))}
                  </Typography>
                </Box>
                <Divider />
              </Box>
            </Box>
          </>
        )}
      </Box>
    </>
  )
}

export default ItemDetail
