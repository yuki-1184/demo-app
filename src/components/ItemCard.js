import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

const ItemCard = (item, index) => {
  console.log(item.item.headLine)
  return (
    <Card key={index} sx={{ maxWidth: 200 }}>
      <CardContent>
        <Box component="img" src={item.item.image.medium} />
        <Typography variant="h6" component="div">
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
