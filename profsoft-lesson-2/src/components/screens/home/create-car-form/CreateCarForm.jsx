import { useState } from 'react'
import {useForm} from 'react-hook-form'
import cls from './CreateCarForm.module.css'
import {useMutation, useQueryClient} from '@tanstack/react-query'

import { CarService } from '../../../../services/car.service'

const clearData = {
    price: '',
    name: '',
    image: ''
}

const CreateCarForm = () => {
    const [data, setData] = useState(clearData);
    
    const {register, reset, handleSubmit} = useForm({
        mode: 'onChange'
    });

    const queryClient = useQueryClient()

    const {mutate} = useMutation(['create car'], data => 
        CarService.create(data), {
            onSuccess: () => {
                queryClient.invalidateQueries('cars')
            },
        }
    )

    const createCar = (data) => {
        mutate(data)
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