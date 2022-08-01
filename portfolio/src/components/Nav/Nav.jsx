import { Link } from 'react-router-dom';

import './Nav.css';

const Nav = () => {
    return (
        <>
            <div className='navContainer'>
                <h1>A B</h1>
                <div className='link-holder'>
                    <Link className='link' to="/">Home</Link>
                    <Link className='link' to="/about">About</Link>
                    <Link className='link' to="contact">Contact</Link>
                </div>
            </div>
        </>
    )
}


export default Nav;