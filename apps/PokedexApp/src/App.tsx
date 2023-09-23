import { Navbar } from "./components/navbar"
import { ListPoke } from "./pages/listPoke";
import './App.css'

export const App = () => {
  return (
    <div className='flex  h-fit items-center justify-center w-full bg-gray-700'>
      <div className='bg-red-500 w-full h-full  flex flex-col'>
        <div>
          <Navbar/>
        </div>
        <div className="bg-white m-2 rounded shadow">
          <ListPoke/>
        </div>
      </div>

    </div>
  )
}
