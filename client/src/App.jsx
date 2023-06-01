import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import AppContext from "./utils/context"
import Login from "./pages/Login"

const App = () => {

  return (
    <BrowserRouter>  
        <AppContext>
        <Navbar />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
        </Routes>  
        </AppContext> 
    </BrowserRouter>
   
  )
}

export default App
