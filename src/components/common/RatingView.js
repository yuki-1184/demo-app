import { Box, Rating, Typography } from '@mui/material'

const roundHalf = (num) => {
  return Math.round(num * 2) / 2
}

const RatingView = (props) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Rating
        name="half-rating"
        precision={0.5}
        value={roundHalf(props.rate)}
        readOnly
      ></Rating>
      <Typography
        variant="subtitle1"
        color="text.secondary"
        component={'div'}
        sx={{ padding: '0px 5px' }}
      >
        {props.count}
      </Typography>
    </Box>
  )
}

export default RatingView
