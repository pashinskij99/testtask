import React from 'react'
import Tooltip from "../../../../components/tooltip";
import undefinedIcon from '../../../../assets/icons/card_img_undefined.svg';

export const GetRequestUsersItem = ({
	name, 
	email, 
	phone, 
	position, 
	photo,
}) => {
	const currentFileExtension = photo.split('.').pop() === 'jpg' || photo.split('.').pop() === 'jpeg'
	
	return (
		<li className='get-request__li card'>
			<img 
				className='card__img margin-bottom-10px' 
				src={currentFileExtension ? photo : undefinedIcon}
				alt="user image"
			/>
			<h2 className='card__title margin-bottom-20px'>{name}</h2>
			<p className='card__vacancy'>{position}</p>
			<Tooltip text={email}>
				<a href={`mailto:${email}`} className='card__address'>{email}</a>
			</Tooltip>
			<a className='card__number' href={"tel:" + {phone}}>{phone}</a>
		</li>
	)
}
