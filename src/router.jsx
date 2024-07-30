import { BrowserRouter, Routes, Route } from 'react-router-dom'

import App from './pages/app';
import Contato from './pages/contato';
import NotFound from './pages/notfound';



export default function Navegacao() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />} />
                <Route path='/Contato' element={<Contato />} />


                <Route path='*' element= {<NotFound/>} />
            </Routes>
        </BrowserRouter>


    )
}