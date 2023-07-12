import {
  Box,
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from '@mui/material'
import { useNavigate } from 'react-router-dom'

const ItemCard = (item, index) => {
  const navigate = useNavigate()

  const handleClick = () => {
    const path = '/items/:' + item.item.genreCategory.id
    navigate(path)
  }

  return (
    <Card
      key={index}
      sx={{ maxWidth: 200, maxHeight: 400 }}
      onClick={handleClick}
    >
      <CardContent>
        <Box component="img" src={item.item.image.medium} />
        <Typography fontSize={'14px'} component="div" sx={{ opacity: 0.8 }}>
          {item.item.headLine}
        </Typography>
        <Typography variant="body2">{item.description}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  )
}

export default ItemCard
