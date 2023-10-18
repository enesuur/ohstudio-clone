

import './Footer.css';
export default function Footer() {
    return (
        <div className='footer'>
            <div className='footer-info'>
                <svg width="46" height="46" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
                <p>© Oli Harris 2023</p>
            </div>
            <div className='footer-social'>
                <a>Twitter</a>
                <a>Linkedin</a>
                <a>Mail</a>
            </div>
        </div>
    )
}