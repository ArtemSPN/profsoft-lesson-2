import cls from './CarItem.module.css';
import {Link} from 'react-router-dom'

const CarItem = ({car}) => {
  return (
    <div className={cls.item}>
        <div style={{backgroundImage: `url(${car.image})`}} className={cls.image}/>
            <div className={cls.info}>
            <h2>{car.name}</h2>
            <p>{car.price + '$'}</p>
            <Link to={`/car/${car.id}`}>
            <button>Read more</button>
            </Link>
        </div>
    </div>
  )
}

export default CarItem