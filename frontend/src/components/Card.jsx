import axios from 'axios'
import { useState } from 'react';


export default function Card({ id, title, description, completed }) {

    console.log(completed);

    const [taskCompleted, setTaskCompleted] = useState(completed);


    const completeHandler = async () => {
        let response = await axios.put(`todos/${id}`, { completed: !completed })
        setTaskCompleted(prev => !prev)
        console.log(response);
    }


    return (
        <>
            <div onClick={completeHandler} className={`flex flex-col  text-center w-fit h-fit ${taskCompleted ? "bg-green-500" : "bg-red-500"}` }
            >
                <h1 className=" my-4 text-lg  text-center">{title}</h1>
                <p className=" text-sm mx-4">{description}</p>
            </div >
        </>
    )
}