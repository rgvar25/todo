
import { useEffect, useState } from "react"
import Card from "./components/Card"
import axios from 'axios'

function App() {
  const [loading, setLoading] = useState(true)
  const [todos, setTodos] = useState([])

  useEffect(() => {

    axios.get("/todos").then((response) => {  console.log(response.data);setTodos(response.data); setLoading(false);}).catch((err) => {setLoading(false);console.log(err)})

  }, [])




  return (
    <>
      {
        loading ? <h1>Loading....</h1> : <><h3 className=' from-gray-500 text-center'>To-do's</h3>

          <div className='
      flex mt-8 h-screen w-full'>
            {
              todos.map((item) => (
                <Card key={item.id} title={item.title} id = {item.id} completed={item.completed} description={item.description} />

              ))
            }

          </div></>

      }

    </>
  )
}

export default App
