import React from 'react'
import { Link } from 'react-router-dom'
import {Stack} from '@mui/material'
import Logo from '../assets/images/Logo.png'

const Navbar = () => {
  return (
    <Stack direction={'row'} justifyContent={'space-around'} borderBottom={'solid 7px red'}>
      <Link to='/' style={{display:'flex', justifyContent: 'center', alignItems: 'center', flexDirection:'column', textDecoration: 'none'}}>
        <img src={Logo} alt='logo' style={{width:'48px', height: '48px', margin: '0 20px'}} />
        <p style={{textDecoration: 'none', color: '#AD0600', marginTop: '5px'}} >BODY SCULPTING</p>
    </Link>
    <Stack direction={'row'} gap={'40px'} alignItems={'center'}>
      <Link to='/' style={{textDecoration: 'none', color: '#AD0600', fontSize: '20px', fontWeight:'500'}}>Home</Link>
      <a href='/#exercises' style={{textDecoration: 'none', color: '#AD0600', fontSize: '20px', fontWeight:'500'}}>
      Exercises</a>
    </Stack>
  </Stack>
  )
}

export default Navbar