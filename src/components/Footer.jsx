import React from 'react';
import { AiFillHome, AiOutlineHome } from 'react-icons/ai';
import { BsBarChartLineFill, BsBarChartLine } from 'react-icons/bs';
import { IoCreateOutline } from 'react-icons/io5';
import { MdOutlineLogout } from 'react-icons/md';
import { useLocation, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const listFooter = [
  {
    active: <AiFillHome size="20px" color="#00c1c4" />,
    nonActive: <AiOutlineHome size="20px" color="#fff" />,
    page: 'Home',
    route: '/',
  },
  {
    active: <IoCreateOutline size="20px" color="#00c1c4" />,
    nonActive: <IoCreateOutline size="20px" color="#fff" />,
    page: 'Create',
    route: '/create',
  },
  {
    active: <BsBarChartLineFill size="20px" color="#00c1c4" />,
    nonActive: <BsBarChartLine size="20px" color="#fff" />,
    page: 'Leaderboards',
    route: '/leaderboards',
  },
  {
    active: <MdOutlineLogout size="20px" color="#00c1c4" />,
    nonActive: <MdOutlineLogout size="20px" color="#fff" />,
    page: 'Logout',
    route: '/logout',
  },
];

function Footer({ onSignOut }) {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleClickMenu = (route) => {
    if (route === '/logout') {
      onSignOut();
      navigate('/');
    } else {
      navigate(route);
    }
  };

  return (
    <footer>
      <ul>
        {listFooter.map(({
          active, nonActive, page, route,
        }) => {
          const isActive = pathname === route;
          return (
            <li key={page}>
              <button title={page} onClick={() => handleClickMenu(route)}>
                {isActive ? active : nonActive}
                <div className={`footer-page ${isActive ? 'page-active' : 'page-nonactive'}`}>{page}</div>
              </button>
            </li>
          );
        })}
      </ul>
    </footer>
  );
}

Footer.propTypes = {
  onSignOut: PropTypes.func.isRequired,
};

export default Footer;
