import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPositions } from '../../../store/positions'
import { FormRadioItem } from './formRadioItem'

export const FormRadio = () => {

	const dispatch = useDispatch()

	const { positions } = useSelector(state => state.positions.positions)

	useEffect(() => {
    dispatch(fetchPositions())
  }, [dispatch])

	return (
		<div className='form__radio margin-bottom-50px'>
			<h3 className='form__radio-title margin-bottom-10px'>Select your position</h3>
			{
				positions && positions.map(({id, name}) => (
					<FormRadioItem
						id={id}
						key={id}
						name={name}
					/>
				))
			}
		</div>
	)
}
