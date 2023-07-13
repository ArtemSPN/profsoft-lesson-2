import { useEffect, useState } from "react";
import { withAuth } from "../../../HOC/withAuth";
import CarItem from "../home/car-item/CarItem";
import {useParams, Link} from 'react-router-dom'
import {CarService}from '../../../services/car.service'

const CarDetail = () => {
    const {id} = useParams();
    const [car, setCar] = useState({})
    useEffect(() => {
        const fetchData = async () => {
            const res = await CarService.getOne(id)
            setCar(res)
        }
        fetchData()
    }, [])

    return (
        <div className="">
            <Link to={'/'}>Back</Link>
            <CarItem car={car} />
        </div>
    )
}

export default withAuth(CarDetail)