import axios from "axios"
import { ICar, ICarData } from "../types/car";

export const CarService = {
    async getAll() {
        const res = await axios.get<ICar[]>("http://localhost:3001/cars")
        return res;
    },

    async getOne(id: string) {
        const res = await axios.get<ICar[]>(`http://localhost:3001/cars/${id}`)
        return res;
    },

    async create(data: ICarData){
        return axios.post('http://localhost:3001/cars', data)
    }
}