import { withAuth } from "../../../HOC/withAuth";
import CarItem from "../home/car-item/CarItem";
import { cars } from "../home/cars.data"
import {useParams, Link} from 'react-router-dom'

const CarDetail = () => {
    const {id} = useParams();
    const car = cars[id-1] 
    return (
        <div className="">
            <Link to={'/'}>Back</Link>
            <CarItem car={car} />
        </div>
    )
}

export default withAuth(CarDetail)