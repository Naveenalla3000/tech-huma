import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'

const Navbar = () => {
    const {user} = useSelector(state => state.auth);
    const [navbarVisible, setNavbarVisible] = React.useState(true);
    const [navbarBackground, setNavbarBackground] = React.useState('');
    React.useEffect(() => {
        let prevScrollPos = window.pageYOffset;
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            if (currentScrollPos >= 0 && currentScrollPos <= 50) {
                setNavbarBackground('text-white transition-all duration-500');
            } else {
                setNavbarBackground(
                    'bg-white shadow !text-black bg-opacity-100 text-black'
                );
            }
            if (prevScrollPos > currentScrollPos) {
                setNavbarVisible(true);
            } else {
                setNavbarVisible(false);
            }
            prevScrollPos = currentScrollPos;
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={ `fixed h-[10vh] text-white top-0 left-0 right-0 z-10 ${ navbarBackground }  ${ navbarVisible ? 'translate-y-0' : '-translate-y-full'
    } ease-in-out px-16 py-3 transition-all duration-500` }>
            <div className="h-full w-full flex justify-center items-center">
                <div className="w-[80%] h-full flex">
                    <Link to={'/'}>
                        <img src="images/klu_logo.svg" alt="" className='h-full' />
                    </Link>
                    <div className="flex justify-center items-center ml-[4%] text-[1.2rem] font-semibold">
                        <Link className='' to={'/'}>Home</Link>
                        <Link className='ml-6' to={'/about'}>About</Link>
                        {/* <Link className='ml-6' to={'/events'}>Events</Link> */}
                        <Link className='ml-6' to={'/timeline'}>Timeline</Link>
                        <Link className='ml-6' to={'/theme'}>Theme</Link>
                        <Link className='ml-6' to={'/committee'}>Committee</Link>
                        <Link className='ml-6' to={'/partner'}>Partner</Link>
                        <Link className='ml-6' to={'/contact'}>Contact</Link>
                    </div>
                </div>
                <div className="text-[1rem] font-semibold">
                    <Link className='ml-10 border-[1.5px] px-4 py-2 bg-[#f74a00] hover:bg-[#f74a00]/90 transition-all duration-300 ease-in-out text-white rounded-lg capitalize shadow-md' to={user?'/dashboard':'login'}>
                        {
                            user ? <span>Dashboard</span> : <span>Login/register</span>
                        }    
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar