
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Create from './components/Create';
import Display from './components/Display';
import Home from './components/Home';
import NotFound from './components/NotFound';
import Update from './components/Update';
/*
import Update from './routes/Update'; // default export
import{ Update2 } from './routes/Update'; // just export

*/




function App() {

  return (
    <>
    <div className="">
        <BrowserRouter>
            <Routes>
              <Route exact path='/' element={<Home />}></Route>
                <Route exact path='/create' element={<Create/>}></Route>
                <Route exact path='/display' element={<Display/>}></Route>
                <Route exact path='/update/:id' element={<Update/>}></Route>
                <Route exact path='*' element={<NotFound/>}></Route>
               
            </Routes>
        </BrowserRouter>
    </div>
    </>
  );
}

export default App;
