import React from 'react'
import { AppBar, Toolbar, CssBaseline, Typography } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
// import { Link } from 'react-router-dom'

// const useStyles = makeStyles((theme) => ({
//   navlinks: {
//     marginLeft: theme.spacing(10),
//     display: 'flex',
//   },
//   logo: {
//     flexGrow: '1',
//     cursor: 'pointer',
//   },
//   link: {
//     textDecoration: 'none',
//     color: 'white',
//     fontSize: '20px',
//     marginLeft: theme.spacing(20),
//     '&:hover': {
//       color: 'yellow',
//       borderBottom: '1px solid white',
//     },
//   },
// }))

function Navbar() {
  // const classes = useStyles()

  return (
    <AppBar position="static">
      <CssBaseline />
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h4">Yahoo shopping</Typography>
        <div>
          {/* <Link to="/">Home</Link> */}
          <form>
            <div></div>
            <div>
              <SearchIcon />
            </div>
            <div>
              <input type="text" placeholder="search Yahoo!"></input>
            </div>
          </form>
        </div>
      </Toolbar>
    </AppBar>
  )
}
export default Navbar
