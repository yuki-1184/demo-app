import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { fetchItems } from '../services/fetchApi'
import { Backdrop, CircularProgress, Box, Button } from '@mui/material'
import ItemCardMedium from '../components/ItemCardMedium'

const countPages = (total, setEnd) => {
  const totalPages = Math.floor(total / 20)
  setEnd(totalPages)
  return totalPages
}

const SearchResult = () => {
  const { keyword } = useParams()
  const [searchResult, setSearchResult] = useState()
  const [pageCount, setPageCount] = useState(0)
  const [currentPage, setCurrentPage] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      fetchItems(keyword.substring(1), setSearchResult)
    }, '1000')
    if (searchResult) {
      countPages(searchResult.totalResultsAvailable, setPageCount)
      console.log(searchResult)
    }
  }, [keyword])

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  const firstPageNumber = Math.max(0, currentPage - Math.floor(pageCount / 2))
  const lastPageNumber = Math.min(pageCount, firstPageNumber + 5)

  return (
    <>
      {searchResult ? (
        searchResult.hits.map((item, index) => {
          return (
            <Box
              key={index}
              sx={{ display: 'flex', justifyContent: 'center', margin: '20px' }}
            >
              <ItemCardMedium item={item} />
            </Box>
          )
        })
      ) : (
        <Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={true}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      )}
      <Box
        sx={{ display: 'flex', justifyContent: 'center', margin: '20px 80px' }}
      >
        <div>
          <Button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 0}
          >
            Previous
          </Button>
          {Array.from(
            { length: lastPageNumber - firstPageNumber },
            (_, i) => i + firstPageNumber,
          ).map((_, index) => (
            <Button
              key={index}
              onClick={() => handlePageChange(index)}
              disabled={index === currentPage}
            >
              {index + 1}
            </Button>
          ))}
          <Button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === pageCount - 1}
          >
            Next
          </Button>
        </div>
      </Box>
    </>
  )
}

export default SearchResult
