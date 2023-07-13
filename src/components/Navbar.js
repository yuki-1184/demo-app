import React, { useState } from 'react'
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  Box,
  Link,
} from '@mui/material'
import { styled } from '@mui/system'
import SearchIcon from '@mui/icons-material/Search'
import { useNavigate } from 'react-router-dom'

const StyledForm = styled('form')({
  display: 'flex',
  position: 'static',
  borderRadius: '4px 4px 4px 4px',
})

function Navbar() {
  // const classes = useStyles()
  const navigate = useNavigate()
  const [searchKeyword, setSearchedKeyword] = useState('')

  const handleSubmit = () => {
    const path = '/searchResult/:' + searchKeyword
    navigate(path)
  }

  return (
    <AppBar position="static">
      <CssBaseline />
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Link href="/items">
          <Typography variant="h4" color={'white'}>
            Yahoo shopping
          </Typography>
        </Link>
        <div>
          {/* <Link to="/">Home</Link> */}
          <StyledForm onSubmit={handleSubmit}>
            <Box>
              <SearchIcon color="black" />
            </Box>
            <Box>
              <input
                type="text"
                placeholder="search Yahoo!"
                value={searchKeyword}
                onChange={(e) => setSearchedKeyword(e.target.value)}
              />
            </Box>
          </StyledForm>
        </div>
      </Toolbar>
    </AppBar>
  )
}
export default Navbar
