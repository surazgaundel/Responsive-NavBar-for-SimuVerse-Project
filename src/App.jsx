import { useState } from 'react';
import RoutesPage from './RoutesPage';
import { Outlet } from 'react-router-dom';


function App() {

  return (
    <>
    <RoutesPage/>
    <Outlet/> 
    </>
  )
}

export default App
