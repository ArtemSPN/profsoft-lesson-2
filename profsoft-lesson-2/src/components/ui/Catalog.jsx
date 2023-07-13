import CarItem from '../screens/home/car-item/CarItem'

const Catalog = ({cars}) => {
  return (
    <div>
        {cars?.length
        ? cars.map((car) => (<CarItem car={car} key={car.id}/>))
        :<h2>Машин нет</h2>
        }
    </div>
  )
}

export default Catalog