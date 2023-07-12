import { useState } from 'react'
import {useForm} from 'react-hook-form'
import cls from './CreateCarForm.module.css'

const clearData = {
    price: '',
    name: '',
    image: ''
}

const CreateCarForm = ({setCars}) => {
    const [data, setData] = useState(clearData);
    
    const {register, reset, handleSubmit} = useForm({
        mode: 'onChange'
    });

    const createCar = (data) => {
        setCars(prev => [...prev, {id: prev.length + 1,...data}])
        reset()
    }

    return (
        <form className={cls.form} onSubmit={handleSubmit(createCar)}>
            <input 
                type="text" 
                {...register('name', {required: true})}
                placeholder='car name' 
            />
            <input 
                type="text" 
                {...register('price', {required: true})}
                placeholder='car price' 
            />
            <input 
                type="text" 
                {...register('image', {required: true})}
                placeholder='car image' 
            />
            <button className='btn'>Cоздать</button>
        </form>
    )
}

export default CreateCarForm