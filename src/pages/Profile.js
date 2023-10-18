

import './Profile.css';
import MockPhoto from '../assets/img/mockPhoto.jpg';
import EuroSportImg from '../assets/img/eurosport.jpg';
import HereImg from '../assets/img/here.jpg';
import NikeImg from '../assets/img/nike.jpg';
import OlympicysImg from '../assets/img/olympics.jpg';

export default function Profile() {
    return (
        <div className='profile container'>
            <h1 className='profile-title'>Hey 👋🏼 I'm Oli</h1>

            <div className='profile-photos'>
                <div>
                    <img src={MockPhoto} alt='Mock Photo' />
                </div>
                <div>
                    <img src={MockPhoto} alt='Mock Photo' />
                </div>
            </div>
            <div className='profile-about'>
                <span>About</span>
                <h2>
                    A freelance designer based in the UK.
                    I combine my experience in product and brand to solve problems, tell stories, and create compelling experiences.
                </h2>
            </div>

            <div className='profile-experience'>
                <span>Experience</span>
                <h1>Where I've worked</h1>
            </div>

            <div className='profile-collabs'>
                <div className='collab-item'>
                    <p className='collab-time'>2017 - Present</p>
                    <p className='collab-name'>OH.STUDIO</p>
                    <p className='job-title'>Freelance Designer</p>
                    <p className='job-position'>Director</p>
                </div>
                <div className='collab-item'>
                    <p className='collab-time'>2021 — Present</p>
                    <p className='collab-name'>Friendly Studio</p>
                    <p className='job-title'>Lead Product Designer</p>
                    <p className='job-position'>Freelance</p>
                </div>
                <div className='collab-item'>
                    <p className='collab-time'>2022</p>
                    <p className='collab-name'>R/GA</p>
                    <p className='job-title'>Senior Visual Designer</p>
                    <p className='job-position'>Freelance</p>
                </div>
                <div className='collab-item'>
                    <p className='collab-time'>2021</p>
                    <p className='collab-name'>R/GA</p>
                    <p className='job-title'>Senior Visual Designer</p>
                    <p className='job-position'>Freelance</p>
                </div>
                <div className='collab-item'>
                    <p className='collab-time'>2021</p>
                    <p className='collab-name'>AKQA</p>
                    <p className='job-title'>Senior Designer</p>
                    <p className='job-position'>Freelance</p>
                </div>
                <div className='collab-item'>
                    <p className='collab-time'>2020</p>
                    <p className='collab-name'>AKQA</p>
                    <p className='job-title'>Senior Designer</p>
                    <p className='job-position'>Freelance</p>
                </div>
                <div className='collab-item'>
                    <p className='collab-time'>2019</p>
                    <p className='collab-name'>UI Centric</p>
                    <p className='job-title'>Senior Product Designer</p>
                    <p className='job-position'>Freelance</p>
                </div>
                <div className='collab-item'>
                    <p className='collab-time'>2017</p>
                    <p className='collab-name'>Agency TK</p>
                    <p className='job-title'>Senior Digital Designer</p>
                    <p className='job-position'>Permanent</p>
                </div>
                <div className='collab-item'>
                    <p className='collab-time'>2012</p>
                    <p className='collab-name'>Agency TK</p>
                    <p className='job-title'>Digital Designer</p>
                    <p className='job-position'>Permanent</p>
                </div>
                <div className='collab-item'>
                    <p className='collab-time'>2009</p>
                    <p className='collab-name'>Next Level</p>
                    <p className='job-title'>Digital Designer</p>
                    <p className='job-position'>Permanent</p>
                </div>
                <div className='collab-item'>
                    <p className='collab-time'>2008</p>
                    <p className='collab-name'>Next Level</p>
                    <p className='job-title'>Junior Digital Designer</p>
                    <p className='job-position'>Permanent</p>
                </div>
            </div>

            <div className='profile-clients'>
                <span>Clients</span>
                <h2>Who I've worked with</h2>
            </div>

            <div className='clients'>
                <div className='client-item'>
                    <img src={HereImg} alt='Brand Photo' />
                </div>
                <div className='client-item'>
                    <img src={HereImg} alt='Brand Photo' />
                </div>
                <div className='client-item'>
                    <img src={HereImg} alt='Brand Photo' />
                </div>
                <div className='client-item'>
                    <img src={HereImg} alt='Brand Photo' />
                </div>
                <div className='client-item'>
                    <img src={HereImg} alt='Brand Photo' />
                </div>
                <div className='client-item'>
                    <img src={HereImg} alt='Brand Photo' />
                </div>
                <div className='client-item'>
                    <img src={HereImg} alt='Brand Photo' />
                </div>
                <div className='client-item'>
                    <img src={HereImg} alt='Brand Photo' />
                </div>
                <div className='client-item'>
                    <img src={HereImg} alt='Brand Photo' />
                </div>
                <div className='client-item'>
                    <img src={HereImg} alt='Brand Photo' />
                </div>                <div className='client-item'>
                    <img src={HereImg} alt='Brand Photo' />
                </div>
                <div className='client-item'>
                    <img src={HereImg} alt='Brand Photo' />
                </div>                <div className='client-item'>
                    <img src={HereImg} alt='Brand Photo' />
                </div>
                <div className='client-item'>
                    <img src={HereImg} alt='Brand Photo' />
                </div>                <div className='client-item'>
                    <img src={HereImg} alt='Brand Photo' />
                </div>
                <div className='client-item'>
                    <img src={HereImg} alt='Brand Photo' />
                </div>
            </div>

            <div className='profile-contact'>
                <h1>Let's work together.</h1>
                <a href='#'>Get in touch</a>
            </div>
        </div>
    )
}