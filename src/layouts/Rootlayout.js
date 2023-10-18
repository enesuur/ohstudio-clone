
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Rootlayout.css';
function RootLayout() {
    return (
        <div className='root-layout'>
            <header>
                <Navbar />
            </header>
            <main>
                    <Outlet />
            </main>

            <footer className='container'>
                <Footer/>
            </footer>
        </div>
    )
}

export default RootLayout;