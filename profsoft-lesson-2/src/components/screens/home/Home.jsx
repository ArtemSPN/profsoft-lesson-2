import CreateCarForm from './create-car-form/CreateCarForm'
import Header from '../../ui/Header'
import {useQuery} from '@tanstack/react-query'
import Catalog from '../../ui/Catalog'
import {CarService} from '../../../services/car.service'

const Home = () => {
    const {data, isLoading, error} = useQuery(['cars'], () => CarService.getAll())

    if(isLoading) {
        return <p>Loading...</p>
    }

    return (
        <div>
            <h1>Cars catalog</h1>
            <Header/>
            <CreateCarForm/>
            <Catalog cars={data.data}/>
        </div>
    )
}

export default Home