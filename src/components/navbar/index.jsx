import React from 'react'
import {ReactComponent as LogoImg} from '../../assets/icons/logo_img.svg'
import {ReactComponent as LogoText} from '../../assets/icons/logo_text.svg'

export const Navbar = () => {

  return (
	<div className="navbar">
		<div className="container navbar__flex">
			<div className="navbar__logo">
				<LogoImg className='logo-img' />
				<LogoText className='logo-text' />
			</div>
			<div className="navbar__user">
				<a href='#users' className='btn btn-primary'>Users</a>
				<a href='#signin' className='btn btn-primary margin-left-10px'>Sign up</a>
			</div>
		</div>
	</div>
  )
}
