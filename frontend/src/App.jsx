
import { useEffect, useState } from "react"
import Card from "./components/Card"
import axios from 'axios'

function App() {
  const [todos, setTodos] = useState([])

  useEffect(() => {

    axios.get("/todos").then((response) => setTodos(response.data)).catch((err) => console.log(err))



    


  }, [])




  return (
    <>
      <h3 className=' from-gray-500 text-center'>To-do's</h3>

      <div className='
      flex mt-8 h-screen w-full'>
        {
          todos.map((item) => (
            <Card key={item.id} title={item.title} description={item.description} />

          ))
        }

      </div>
    </>
  )
}

export default App
