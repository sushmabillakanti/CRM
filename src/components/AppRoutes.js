import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Page404 from './Page404';
import MenuBar from './MenuBar.js';
import ProductDetails from './Product-Details.js';
import Register from './Register.js';
 
const AppRoutes = () => {
    return (
        <>
            <BrowserRouter>
                <>
                    <MenuBar />
                </>
                <div className='container'>
                    <Routes >
                        <Route exact path='home' element={<Home />} />
                        <Route exact path='login' element={<Login />} />
                        <Route exact path = 'register' element={<Register/>}/>
                        <Route exact path = 'product-details/:productId' element={<ProductDetails/>}/>
                        <Route exact path='' element={<Home />} />
                        <Route path='*' element={<Page404 />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </>
    );
};
 
export default AppRoutes;