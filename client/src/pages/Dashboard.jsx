import React, { useEffect } from 'react';
import NavbarLogin from '../components/NavbarLogin';
import StudentRegisterForm from '../components/StudentRegisterForm';
import { Helmet } from 'react-helmet-async';
import ChangePassword from '../components/ChangePassword';
import Profile from '../components/Profile';
import { useLogoutQuery } from '../redux/services/auth/authApi';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const {user} = useSelector(state=>state.auth);
  const navigate = useNavigate();
  const [section, setSection] = React.useState(0);
  const [logout,setLogout] = React.useState(false);
  const { } = useLogoutQuery(undefined, {
    skip: !logout,
});

const handleLogout = async (e) => {
  e.preventDefault();
  setLogout(true);
};
  const navItems = [
    {
      name: 'Registation',
    },
    {
      name: 'My profile',
    },
    {
      name: 'Change password',
    },
  ]
  useEffect(()=>{
    if(!user){
      navigate('/login');
    }
  },[user])

  return (
    <>
      <Helmet>
        <title>Tech-Huma | Dashboard </title>
        <meta name="description" content="dashboard" />
        <meta name="keywords" content="Student Registration Form" />
        <meta name="author" content="Student Registration Form" />
      </Helmet>
      <div>
        <NavbarLogin profile={true} setSection={setSection} />
        <div className="flex flex-row mt-28 w-full min-h-[80vh]">
          <div className="w-1/3 h-full ">
            <ul className='bg-[#fdfdfd] mx-auto rounded-[8px] border w-[60%] h-auto mt-16 my-auto cursor-pointer'>
              {
                navItems.map((item, index) => (
                  <li key={index} className={`py-3 px-4 font-medium ${section === index ? 'bg-[#f74a00] text-white' : 'hover:bg-slate-100'}`} onClick={() => setSection(index)}>{item.name}</li>
                ))
              }
              <li className={`py-3 px-4 font-medium ${section === 3 ? 'bg-[#f74a00] text-white' : 'hover:bg-slate-100'}`} onClick={handleLogout}>Logout</li>
            </ul>
          </div>
          <div className="w-2/3 relative">
            {
              section === 0 ? <StudentRegisterForm /> : section === 1 ? <Profile /> : <ChangePassword />
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
