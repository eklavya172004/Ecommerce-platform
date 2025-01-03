// import React from 'react'
import logo from '../assets/logo.png'
import {Link, NavLink, Route, useLocation, useNavigate} from 'react-router-dom'
import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
// import { red } from '@mui/material/colors';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
// import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from 'react';
import { useContext } from 'react';
import { Context } from '../context/Context';

// import image from './../assets/'

const Navbar = () => {
  const [state, setState] = React.useState({
    right: false,
  });

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();
  const location = useLocation();
  const [isSearchOn,setSearch] = useState(false);
  const {countCart,cartItems} = useContext(Context);

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const menuItems = [
    { text: 'Home', route: '/' },
    { text: 'All Products', route: '/AllProducts' },
    { text: 'About', route: '/About' },
    { text: 'Contact', route: '/Contact' },
    { text: 'Orders', route: '/Cart' },
    { text: 'My Profile', route: '/Account' },
    { text: 'Add to Cart', route: '/Cart' },
    {text:'Login',route:'/Login'}
  ];

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {menuItems.map((text, index) => (
          <ListItem key={text.text} disablePadding>
            <ListItemButton onClick={() => navigate(text.route)}>
              <ListItemIcon>
                {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                <InboxIcon/>
              </ListItemIcon>
              <ListItemText primary={text.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
          </Box>
  );


  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const gotoAccount = () => {
    console.log('navigating to the account page')
    navigate('/Login')
    handleClose();
  }
  const gotocart = () => {
    navigate('/Cart');
  } 

  return (
    <div className='flex   items-center justify-between '>
        <div className="logo p-5 ml-5">
            <Link to='/'><img src={logo} alt="" className='w-32'/></Link>
        </div>
  
        <div className='flex justify-center  items-center '>

        <div className="pages hidden md:block mr-10">
            <ul className={` transition-all  items-center gap-14 flex`}>
              <NavLink to='/' className= { ({isActive}) => isActive ? 'text-red-500 font-semibold' : 'text-gray-500 font-semibold'}><p>Home</p>
              {/* <hr className={`transition-all duration-300 ease-in-out bg-gray-500 h-1  hidden`}/> */}

              </NavLink>
              {/* <hr className='bg-gray-500 w-full' /> */}
              <NavLink to='/AllProducts' className={ ({isActive}) => isActive ? 'text-red-500 font-semibold' : 'text-gray-500 font-semibold'}><p>Products</p>
              {/* <hr className='w-10  bg-gray-500  h-1'/> */}
              </NavLink>
              <NavLink to='/About' className={ ({isActive}) => isActive ? 'text-red-500 font-semibold' : 'text-gray-500 font-semibold'}><p>About</p>
              {/* <hr className='w-10 bg-gray-500  h-1'/> */}
              </NavLink>
              <NavLink to='/Contact' className={ ({isActive}) => isActive ? 'text-red-500 font-semibold' : 'text-gray-500 font-semibold'}><p>Contact</p>
              {/* <hr className='w-10 bg-gray-500  h-1'/> */}
              </NavLink>
              {/* <NavLink  className={ ({isActive}) => isActive ? 'text-red-500 font-semibold' : 'text-gray-500 font-semibold'}> */}
                <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{
          color:'gray',
          fontWeight:'semi-bold'
        }}
      >
        Accounts
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >

        {/* <MenuItem onClick={handleClose}>Profile</MenuItem> */}
        <MenuItem onClick={gotoAccount}>My Account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
              {/* </NavLink> */}
            </ul>
        </div>

        {/* Search bar functinality */}

        {location.pathname === '/AllProducts' && (
           <div className="search-bar hidden md:flex  items-center">
           <input
             type="text"
             placeholder="Search products..."
             className={`border border-gray-300 font-serif transition-all duration-500 ease-in-out rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500
              ${isSearchOn ? ' w-96' : ' w-80'}  `}
              onFocus={() => setSearch(true)}
              onBlur={() => setSearch(false)}
           />
         </div>
        )}

        <div className="cart p-2 mr-6 gap-1 flex justify-center  items-center">
            {/* <img src={} alt="" />
             */}
             
             <div className='md:hidden flex'>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer('right', true)}
          sx={{
            color:'red'
          }} 
          >
            <MenuIcon/>
          </Button>
          <Drawer
            anchor='right'
            open={state['right']}
            onClose={toggleDrawer('right', false)}
            
          >
            {list('right')}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
    <div>

    </div>
             <svg className='w-7  -mr-5 md:mr-5 hover:cursor-pointer' onClick={() => gotocart()} xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="ast-basket-icon-svg" x="0px" y="0px" width="100" height="100" viewBox="826 826 140 140" enable-background="new 826 826 140 140" xml:space="preserve" fill='red'>
            <path d="M955.418,887.512c2.344,0,4.343,0.829,6.002,2.486c1.657,1.659,2.486,3.659,2.486,6.002c0,2.343-0.829,4.344-2.486,6.001  c-1.659,1.658-3.658,2.487-6.002,2.487h-0.994l-7.627,43.9c-0.354,2.033-1.326,3.713-2.917,5.04  c-1.593,1.326-3.405,1.989-5.438,1.989h-84.883c-2.033,0-3.846-0.663-5.438-1.989c-1.591-1.327-2.564-3.007-2.918-5.04l-7.626-43.9  h-0.995c-2.343,0-4.344-0.829-6.001-2.487c-1.658-1.657-2.487-3.658-2.487-6.001c0-2.343,0.829-4.343,2.487-6.002  c1.658-1.658,3.659-2.486,6.001-2.486H955.418z M860.256,940.563c1.149-0.089,2.111-0.585,2.885-1.491  c0.773-0.907,1.116-1.936,1.028-3.085l-2.122-27.586c-0.088-1.15-0.585-2.111-1.492-2.885c-0.906-0.774-1.934-1.117-3.083-1.028  c-1.149,0.088-2.111,0.586-2.885,1.492s-1.116,1.934-1.028,3.083l2.122,27.587c0.088,1.105,0.542,2.034,1.359,2.785  c0.818,0.752,1.78,1.128,2.885,1.128H860.256z M887.512,936.319v-27.587c0-1.149-0.42-2.144-1.26-2.984  c-0.84-0.84-1.834-1.26-2.984-1.26s-2.144,0.42-2.984,1.26c-0.84,0.841-1.26,1.835-1.26,2.984v27.587c0,1.149,0.42,2.145,1.26,2.984  c0.84,0.84,1.835,1.26,2.984,1.26s2.144-0.42,2.984-1.26C887.092,938.464,887.512,937.469,887.512,936.319z M912.977,936.319  v-27.587c0-1.149-0.42-2.144-1.26-2.984c-0.841-0.84-1.835-1.26-2.984-1.26s-2.145,0.42-2.984,1.26  c-0.84,0.841-1.26,1.835-1.26,2.984v27.587c0,1.149,0.42,2.145,1.26,2.984s1.835,1.26,2.984,1.26s2.144-0.42,2.984-1.26  C912.557,938.464,912.977,937.469,912.977,936.319z M936.319,936.65l2.122-27.587c0.088-1.149-0.254-2.177-1.027-3.083  s-1.735-1.404-2.885-1.492c-1.15-0.089-2.178,0.254-3.084,1.028c-0.906,0.773-1.404,1.734-1.492,2.885l-2.122,27.586  c-0.088,1.149,0.254,2.178,1.027,3.085c0.774,0.906,1.736,1.402,2.885,1.491h0.332c1.105,0,2.066-0.376,2.885-1.128  C935.777,938.685,936.23,937.756,936.319,936.65z M859.66,855.946l-6.167,27.322h-8.753l6.698-29.245  c0.84-3.89,2.807-7.062,5.902-9.516c3.095-2.453,6.632-3.68,10.611-3.68h11.074c0-1.149,0.42-2.144,1.26-2.984  c0.84-0.84,1.835-1.26,2.984-1.26h25.465c1.149,0,2.144,0.42,2.984,1.26c0.84,0.84,1.26,1.834,1.26,2.984h11.074  c3.979,0,7.516,1.227,10.611,3.68c3.094,2.454,5.062,5.626,5.901,9.516l6.697,29.245h-8.753l-6.168-27.322  c-0.486-1.945-1.491-3.537-3.017-4.774c-1.525-1.238-3.282-1.857-5.272-1.857h-11.074c0,1.15-0.42,2.144-1.26,2.984  c-0.841,0.84-1.835,1.26-2.984,1.26h-25.465c-1.149,0-2.144-0.42-2.984-1.26c-0.84-0.84-1.26-1.834-1.26-2.984h-11.074  c-1.99,0-3.747,0.619-5.272,1.857C861.152,852.409,860.146,854,859.66,855.946z"></path>
            </svg>
            <div className={`${countCart()>0 ? 'flex':'hidden'} absolute right-2 top-10 md:right-10 bg-pink-500 bg-opacity-65 text-white rounded-full px-2 md:text-lg py-1  font-bold  items-center justify-center w-6 h-6`}>{countCart()}</div>
            <div className='block md:hidden'>
            {/* this space is for bar of red color  */}

            </div>
        </div>
        </div>
    </div>
  )
}

export default Navbar;
