import clsx from 'clsx'
import React from 'react'

export const Button = ({
	TagHtml = 'button', 
	children, 
	colorThemeClass = 'btn-primary', 
	href = '#', 
	className = '', 
	handleClick,
	disabled = false,
	type = 'submit'
}) => {
	return (
		<TagHtml
			onClick={handleClick} 
			href={TagHtml === 'a' ? href : null} 
			type={type}
			className={clsx('btn', colorThemeClass, className)}
			disabled={disabled}
		>
			{children}
		</TagHtml>
	)
}
