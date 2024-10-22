import {BrowserRouter,Routes,Route, Outlet} from 'react-router-dom';
import Home from '../src/pages/Home.jsx';
import Signup from '../src/pages/Signup.jsx';
import Products from '../src/pages/Products.jsx';
import Contact from '../src/pages/Contact.jsx';
import About from '../src/pages/About.jsx';
import Login from '../src/pages/Login.jsx';
import Error from './pages/Error.jsx';
import AdminLayout from './components/layouts/AdminLayout.jsx';
import AdminContacts from './components/layouts/AdminContacts.jsx';
import AdminUsers from './components/layouts/AdminUsers.jsx';
import Navbar from './components/Navbar.jsx';
import Logout from './pages/Logout.jsx';
import AdminServices from './components/layouts/AdminServices.jsx';

const App=()=>{
  return(
    <>
    <BrowserRouter>
    <Navbar></Navbar>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/products' element={<Products/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/logout' element={<Logout />}/>
      <Route path='*' element={<Error/>}/>
      {/* Admin Route */}
      <Route path='/admin' element={<AdminLayout/>}>
      
         {/* ALL users */}
      <Route path='users' element={<AdminUsers/>}/>
         {/* All Contacts */}
      <Route path='contacts' element={<AdminContacts/>}/>
         {/* All Services */}
      <Route path='services' element={<AdminServices/>}/> 

      </Route>
    </Routes>
    </BrowserRouter>

    </>
  )
}

export default App;