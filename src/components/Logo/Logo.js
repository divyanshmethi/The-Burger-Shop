import React from 'react'
import classes from './Logo.css'
import LogoImage from '../../assets/images/burger-logo.png'

const Logo = (props) => {
  return (
    <div className={classes.Logo}>
      <img src={LogoImage} alt="MyBurger" />
    </div>
  )
}

export default Logo
