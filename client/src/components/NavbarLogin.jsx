import React from 'react'
import { Link } from 'react-router-dom'
import { IoPersonCircleSharp } from 'react-icons/io5'

const NavbarLogin = ({ profile,setSection }) => {
    const [navbarVisible, setNavbarVisible] = React.useState(true);
    const [navbarBackground, setNavbarBackground] = React.useState('');
    const [showDropDown, setShowDropDown] = React.useState(false);
    React.useEffect(() => {
        let prevScrollPos = window.pageYOffset;
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            if (currentScrollPos >= 0 && currentScrollPos <= 50) {
                setNavbarBackground('bg-opacity-1 text-black transition-all duration-500');
            } else {
                setNavbarBackground(
                    'bg-white shadow text-black bg-opacity-100 text-black'
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
        <div className={`fixed bg-white h-[10vh] w-full top-0 left-0  right-0 z-10 px-[105px] ${ navbarBackground }  ${ navbarVisible ? 'translate-y-0' : '-translate-y-full'
    } ease-in-out py-3 transition-all duration-500`}>
            <div className="h-full w-full flex items-start my-2">
                <div className="h-full flex flex-row gap-x-4 w-full lg:w-[50%]">
                    <Link to={'/'}>
                        <img src="/images/klu_logo.svg" alt="" className='h-full' />
                    </Link>
                    <div className="hidden lg:flex lg:justify-center items-center ml-[4%] text-[1.2rem] font-semibold">
                        <Link className='' to={'/'}>Home</Link>
                    </div>
                </div>
                <div className="text-[1rem] font-semibold hidden lg:block">
                    {/* {
                        profile && (
                            <>
                                <div className="relative">
                                    <div className="flex flex-row items-center justify-center w-full gap-2 cursor-pointer" onClick={() => setShowDropDown(!showDropDown)}>
                                        <IoPersonCircleSharp size={25} />
                                        <p className='min-w-max'>My Account</p>
                                    </div>
                                    {
                                        showDropDown && (
                                            <>
                                                <div id="dropdown" class="bg-white divide-y divide-gray-100 absolute -bottom-[11rem] rounded-lg shadow w-44 dark:bg-gray-700">
                                                    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                                                        <li onClick={()=>setSection(0)} className='cursor-pointer'>
                                                            <span class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Registation form</span>
                                                        </li>
                                                        <li onClick={()=>setSection(1)} className='cursor-pointer'>
                                                            <span class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Profile</span>
                                                        </li>
                                                        <li onClick={()=>setSection(2)} className='cursor-pointer'>
                                                            <a class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">change password</a>
                                                        </li>
                                                        <li>
                                                            <a href="/" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </>
                                        )
                                    }
                                </div>
                            </>
                        )
                    } */}
                    {/* <Link className='ml-10 border-[1.5px] px-4 py-2 bg-[#f75700] hover:bg-[#f74a00] text-white rounded-lg capitalize shadow-md' to={'/login'}>
                        <span className='capitalize'>LOGIN/REGISTER</span>
                    </Link> */}
                </div>
            </div>
        </div>
    )
}

export default NavbarLogin