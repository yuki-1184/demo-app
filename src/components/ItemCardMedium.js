import {
  Card,
  CardContent,
  Box,
  Typography,
  CardMedia,
  Rating,
} from '@mui/material'

const roundHalf = (num) => {
  return Math.round(num * 2) / 2
}

const ItemCardMedium = (item) => {
  return (
    <>
      <Card sx={{ display: 'flex', maxWidth: '750px' }}>
        <CardMedia
          component="img"
          sx={{ width: 151 }}
          src={item.item.image.medium}
          alt="Live from space album cover"
        />
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography fontSize={'14px'} color="text.secondary">
              {item.item.shipping.name}
            </Typography>
            <Typography component="div" fontSize={'20px'}>
              {item.item.name.slice(0, 50)}...
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              {item.item.headLine}
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Rating
                name="half-rating"
                precision={0.5}
                value={roundHalf(item.item.review.rate)}
                readOnly
              ></Rating>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component={'div'}
                sx={{ padding: '0px 5px' }}
              >
                {item.item.review.count}
              </Typography>
            </Box>
            {item.item.premiumPriceStatus ? (
              <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                <Typography component="div" fontSize={'20px'}>
                  {item.item.premiumPrice}円
                </Typography>
                <Typography
                  color="text.secondary"
                  fontSize={'12px'}
                  sx={{ textDecoration: 'line-through' }}
                >
                  {item.item.price}円
                </Typography>
              </Box>
            ) : (
              <Typography component="div" fontSize={'20px'}>
                {item.item.price}円
              </Typography>
            )}
          </CardContent>
          <Box
            sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}
          ></Box>
        </Box>
      </Card>
    </>
  )
}

export default ItemCardMedium
