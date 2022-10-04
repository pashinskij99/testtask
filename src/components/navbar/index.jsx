import React from 'react'
import {ReactComponent as LogoImg} from '../../assets/icons/logo_img.svg'
import {ReactComponent as LogoText} from '../../assets/icons/logo_text.svg'
import { Button } from '../button'

export const Navbar = () => {

  return (
	<div className="navbar">
		<div className="container navbar__flex">
			<div className="navbar__logo">
				<LogoImg className='logo-img' />
				<LogoText className='logo-text' />
			</div>
			<div className="navbar__user">
				<Button TagHtml='a' href='#users'>
					Users
				</Button>
				<Button TagHtml='a' href='#signin' className='margin-left-10px'>
					Sign up
				</Button>
			</div>
		</div>
	</div>
  )
}
