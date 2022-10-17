import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from '../../pages/Home/Home'
import TaskCatalog from '../../pages/TaskCatalog/TaskCatalog'
import Active from '../../pages/Active/Active'
import Completed from '../../pages/Completed/Completed'
import Closed from '../../pages/Closed/Closed'
import Subscribe from '../../pages/Subscribe/Subscribe'
import Member from '../../pages/Member/Member'
import Invite from '../../pages/Invite/Invite'
import Contact from '../../pages/Contact/Contact'
import FAQ from '../../pages/FAQ/FAQ'
import Settings from '../../pages/Settings/Settings'
import Hello from '../../pages/Hello/Hello'

function AppRoutes() {
  return (
    <>
    <Routes>
        <Route path='/' element={<Hello />} />
        <Route path='/home' element={<Home />} />
        <Route path='/task' element={<TaskCatalog />} />
        <Route path='/active' element={<Active />} />
        <Route path='/completed' element={<Completed />} />
        <Route path='/closed' element={<Closed />} />
        <Route path='/subscribe' element={<Subscribe />} />
        <Route path='/member' element={<Member />} />
        <Route path='/invite' element={<Invite />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/faq' element={<FAQ />} />
        <Route path='/settings' element={<Settings />} />
    </Routes>
    </>
  )
}

export default AppRoutes