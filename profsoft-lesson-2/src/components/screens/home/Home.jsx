import { useState } from 'react'
import {cars as CarsData} from './cars.data'
import CreateCarForm from './create-car-form/CreateCarForm'
import Header from '../../ui/Header'
import Catalog from '../../ui/Catalog'

const Home = () => {
    const [cars, setCars] = useState(CarsData)

    return (
        <div>
            <h1>Cars catalog</h1>
            <Header/>
            <CreateCarForm setCars={setCars}/>
            <Catalog cars={cars}/>
        </div>
    )
}

export default Home