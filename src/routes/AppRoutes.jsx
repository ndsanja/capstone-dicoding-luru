import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, Explore, Login, MerchantDetail, MerchantList, ProductDetail, ProductList, Register, UserProfile, NotFound } from '../views'


export default function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/auth/login' element={<Login />} />
                <Route path='/auth/register' element={<Register />} />
                <Route path='/explores' element={<Explore />} />
                <Route path='/merchants' element={<MerchantList />} />
                <Route path='/merchants/:id' element={<MerchantDetail />} />
                <Route path='/products' element={<ProductList />} />
                <Route path='/products/:id' element={<ProductDetail />} />
                <Route path='/users/:id' element={<UserProfile />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </Router>
    )
}
