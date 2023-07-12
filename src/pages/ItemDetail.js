import { useParams } from 'react-router-dom'

const ItemDetail = () => {
  const { id } = useParams()
  console.log(id)
  return (
    <>
      <h1>hello worlds</h1>
    </>
  )
}

export default ItemDetail
