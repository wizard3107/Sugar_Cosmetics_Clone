import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Blog from '../Pages/Blog/Blog';
import Brushes from '../Pages/Brushes/Brushes';
import Home from '../Pages/Home/Home';
import Makeup from '../Pages/Makeup/Makeup';
import Offer from '../Pages/Offer/Offer';
import SkinCare from '../Pages/SkinCare/SkinCare';
import Trending from '../Pages/Trending/Trending';
import WrongPage from '../Pages/WrongPage/WrongPage';
const UserNavigation = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/brushes' element={<Brushes />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/make-up' element={<Makeup />} />
        <Route path='/skincare' element={<SkinCare />} />
        <Route path='/trending' element={<Trending />} />
        <Route path='/bestOffers' element={<Offer />} />
        <Route path='*' element={<WrongPage/>}/>
      </Routes>
    </div>
  )
}

export default UserNavigation
