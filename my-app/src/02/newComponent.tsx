import React from "react";
import s from "./02.module.css"
type NewConponentType = {
    students: Array<StudentType>
}
type StudentType = {
    id: number
    name: string
    age: number
}



export const NewConponent = (props: NewConponentType) => {
    const topCars = [
        { manufacturer: 'BMW', model: 'm5cs' },
        { manufacturer: 'Mercedes', model: 'e63s' },
        { manufacturer: 'Audi', model: 'rs6' }
    ]
    return (
        <>
            <ul>
                {props.students.map((obj, index) => {

                    return (
                        <li key={obj.id}>
                            <span >{obj.name}</span>
                            <span >age: {obj.age}</span>
                        </li>
                    )
                })}

                <table className={s.table_td}>
                    <thead className={s.thead_tfoot}>
                        <tr>
                            <th colSpan={3}>Cars</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className={s.table_td}>
                            <td >номер</td>
                            <td >производитель</td>
                            <td >модель</td>
                        </tr>
                        <tr>
                            {topCars.map( (car,index) => {
                                return (
                                    <tr>
                                    <td>{index}</td>
                                    <td>{car.manufacturer}</td>
                                    <td>{car.model}</td>
                                    </tr>
                                )
                            })}
                            
                        </tr>
                    </tbody>
                </table>
               
            </ul>

        </>
    )
}