import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Key3 from './forgot';
import Key from './login';
import Key1 from './signup';
import Page4 from './manali/pg4';
import Pg5 from './manali/pg5'; 
import Mal from './maldives and switzerland/pg8';
import Pay from './payment/pay';
import Goa from './goa and lastpage/goa';
import Swi from './maldives and switzerland/pg9';
import Konkan from './Himalayas and kokankada/pgx9';
import Hima from './Himalayas and kokankada/pgx8';
// import Key4 from './home';
// import Goa from './goa and lastpage/goa';
export default function App(){
  return(
    <>
      <Routes>
        <Route path='/' element={<Key />} />
        <Route path='/sig' element={<Key />} />
        <Route path='/sign-up' element={<Key1 />} />
        <Route path='/forgot-password' element={<Key3 />} />
        <Route path='/manali' element={<Page4 />}/>
        <Route path='/manali1' element={<Pg5 />}/>
        <Route path='/goa1' element={<Goa />}/>
        <Route path='/maldive' element={<Mal />}/>
        <Route path='/swit' element={<Swi />}/>
        <Route path='/kok' element={<Konkan />}/>
        <Route path='/him' element={<Hima />}/>
        <Route path='/swi' element={<Pay />}/>
      </Routes>
    </>
  )
}