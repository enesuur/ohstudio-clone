import {
  Route, 
  createBrowserRouter, 
  createRoutesFromElements,
  RouterProvider,

}
from 'react-router-dom';
import RootLayout from './layouts/Rootlayout';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Contact from './pages/Contact';



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route  path='/' element={<RootLayout/>}>
      <Route index element={<Home/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Route>
  )
)

function App() {

  return (
      <RouterProvider router={router}/>
);
}

export default App;