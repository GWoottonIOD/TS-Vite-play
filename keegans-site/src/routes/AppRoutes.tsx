import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Hero from '../components/Hero'


export default function AppRoutes() {
  return (
    <Routes>
  <Route path='/hero' element={<Hero/>}/>
</Routes>
  )
}
