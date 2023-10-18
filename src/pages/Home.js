

import './Home.css';
import MockPhoto from '../assets/img/mockPhoto.jpg';
export default function Home() {
    return (
        <div className='home container'>
            <div className='showcase-wrapper'>
                <h1 className='showcase-title'>
                    A brand and product designer working with clients globally
                </h1>
                <div className='tag-wrapper'>
                    <div>Expertise</div>
                    <div>Branding</div>
                    <div>Product</div>
                    <div>Design Systems</div>
                </div>
            </div>

            <div className='showcase-photos'>
                <div className='showcase-item'>
                    <div className='item-info'></div>
                    <img src={MockPhoto} alt='Mock Photo' />
                </div>
                <div className='showcase-item'>
                    <div className='item-info'></div>
                    <img src={MockPhoto} alt='Mock Photo' />
                    <svg xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.006 2.007a9.927 9.927 0 0 0-7.071 2.922c-3.898 3.899-3.898 10.243 0 14.142 1.885 1.885 4.396 2.923 7.071 2.923s5.187-1.038 7.071-2.923c3.898-3.898 3.898-10.242 0-14.142a9.928 9.928 0 0 0-7.071-2.922zm5.657 15.649c-1.507 1.507-3.517 2.337-5.657 2.337s-4.15-.83-5.657-2.337c-3.118-3.119-3.118-8.194 0-11.313 1.507-1.507 3.516-2.336 5.657-2.336s4.15.829 5.657 2.336c3.118 3.119 3.118 8.194 0 11.313z"></path>
                        <path d="m11.467 11.125-3.214 3.214 1.414 1.414 3.214-3.214 2.125 2.124V9H9.343z"></path>
                    </svg>
                </div>
                <div className='showcase-item'>
                    <div className='item-info'></div>
                    <div className='image-wrapper'>
                        <img src={MockPhoto} alt='Mock Photo' />
                    </div>
                </div>
                <div className='showcase-item'>
                    <div className='item-info'></div>
                    <img src={MockPhoto} alt='Mock Photo' />
                </div>
                <div className='showcase-item'>
                    <div className='item-info'></div>
                    <img src={MockPhoto} alt='Mock Photo' />
                </div>
                <div className='showcase-item'>
                    <div className='item-info'></div>
                    <img src={MockPhoto} alt='Mock Photo' />
                </div>
                <div className='showcase-item'>
                    <div className='item-info'></div>
                    <img src={MockPhoto} alt='Mock Photo' />
                </div>
                <div className='showcase-item'>
                    <div className='item-info'></div>
                    <img src={MockPhoto} alt='Mock Photo' />
                </div>
                <div className='showcase-item'>
                    <div className='item-info'></div>
                    <img src={MockPhoto} alt='Mock Photo' />
                </div>
                <div className='showcase-item'>
                    <div className='item-info'></div>
                    <img src={MockPhoto} alt='Mock Photo' />
                </div>
                <div className='showcase-item'>
                    <div className='item-info'></div>
                    <img src={MockPhoto} alt='Mock Photo' />
                </div>
                <div className='showcase-item'>
                    <div className='item-info'></div>
                    <img src={MockPhoto} alt='Mock Photo' />
                </div>
            </div>

            <div className='showcase-contact'>
                <h2>Let's work together.</h2>
                <a href='#'>Get in touch.</a>
            </div>

            <button className='btn-shop'>
                Shop
            </button>
        </div>
    )
};