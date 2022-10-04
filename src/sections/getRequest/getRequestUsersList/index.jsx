import React from 'react'
import { useSelector } from 'react-redux'
import { GetRequestUsersItem } from './getRequestUsersItem'

export const GetRequestUsersList = () => {

	const { users } = useSelector(state => state.users)

	return (
		<ul className='get-request__ul'>
			{
				users && users.map(({
					id,
					name,
					email,
					phone,
					position,
					photo,
				}) => (
					<GetRequestUsersItem
						key={id}
						name={name}
						email={email}
						phone={phone}
						position={position}
						photo={photo}
					/>
				))
			}
		</ul>
	)
}
