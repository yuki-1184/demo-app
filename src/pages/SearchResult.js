import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { fetchItems } from '../services/fetchApi'
import { Backdrop, CircularProgress, Box } from '@mui/material'
import ItemCardMedium from '../components/ItemCardMedium'

const SearchResult = () => {
  const { keyword } = useParams()
  const [searchResult, setSearchResult] = useState()
  //   const [open, setOpen] = React.useState(false)
  //   const handleClose = () => {
  //     setOpen(false)
  //   }
  //   const handleOpen = () => {
  //     setOpen(true)
  //   }

  useEffect(() => {
    setTimeout(() => {
      fetchItems(keyword.substring(1), setSearchResult)
    }, '1000')
  }, [keyword])
  return (
    <>
      {searchResult ? (
        searchResult.hits.map((item, index) => {
          return (
            <Box key={index} sx={{ margin: '20px' }}>
              <ItemCardMedium item={item} />
            </Box>
          )
        })
      ) : (
        <Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={true}
          //   onClick={handleClose}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      )}
    </>
  )
}

export default SearchResult
