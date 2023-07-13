import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { fetchItems } from '../services/fetchApi'
import {
  Backdrop,
  CircularProgress,
  Box,
  Pagination,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material'
import ItemCardMedium from '../components/ItemCardMedium'

const TOTAL = 25

const countPages = (total) => {
  const totalPages = Math.floor(total / TOTAL)
  return totalPages
}

const SearchResult = () => {
  const { keyword } = useParams()
  const navigate = useNavigate()
  const [searchResult, setSearchResult] = useState()
  const [condition, setCondition] = useState('initial')
  const [pageNumber, setPageNumber] = useState(1)

  useEffect(() => {
    const start = (pageNumber - 1) * TOTAL + 1
    setTimeout(() => {
      fetchItems(keyword.substring(1), setSearchResult, condition, start, TOTAL)
    }, '1000')
  }, [keyword, condition, pageNumber])

  const handleClick = (itemcode) => {
    const path = '/items/:' + itemcode
    navigate(path)
  }

  return (
    <Box sx={{ margin: '20px 80px' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography fontSize={'24px'}>商品検索結果</Typography>
        <FormControl>
          <InputLabel id="demo-simple-select-label">Condition</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={condition}
            label="Condition"
            sx={{
              width: '150px',
            }}
            onChange={(e) => setCondition(e.target.value)}
          >
            <MenuItem value="initial" selected>
              新品・中古
            </MenuItem>
            <MenuItem value="new">新品</MenuItem>
            <MenuItem value="used">中古</MenuItem>
          </Select>
        </FormControl>
      </Box>
      {searchResult ? (
        searchResult.hits.map((item, index) => {
          return (
            <Box
              key={index}
              sx={{ display: 'flex', justifyContent: 'center', margin: '20px' }}
              onClick={() => handleClick(item.code)}
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
        {searchResult && (
          <Pagination
            count={countPages(searchResult.totalResultsAvailable)}
            color="primary"
            onChange={(e, pageNumber) => setPageNumber(pageNumber)}
          />
        )}
      </Box>
    </Box>
  )
}

export default SearchResult
