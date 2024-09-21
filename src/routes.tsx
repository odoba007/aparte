import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/login'
import PropertyPage from './pages/property'
import Testimonial from './pages/testimonial'



export default function Router() {
  return (
    <BrowserRouter>
        <Routes>
        
            <Route path='/' element={<Login/>}/>
            <Route path='/property' element={<PropertyPage/>}/>
            <Route path='/testimonial' element={<Testimonial/>}/>
            
        </Routes>
    </BrowserRouter>
  )
}