
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Layout';
import Home from '../App/Home';
import Buy from '../App/Buy';
import BuyForm from '../App/BuyForm';

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>

            <Route path='/' element={<Home />} />
            <Route path='/buy' element={<Buy />} />
            <Route path='/buy/:id' element={<BuyForm />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
