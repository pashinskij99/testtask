import React from 'react'
import { useDispatch } from 'react-redux'
import { changeRadioId } from '../../../../store/radio'

export const FormRadioItem = ({id, name}) => {

	const dispatch = useDispatch()
	const onChange = (event) => dispatch(changeRadioId(event.target.id))

	return (
		<label className='form__radio-label margin-bottom-10px'>
			{name}
			<input
				id={id}
				onChange={onChange}
				defaultChecked={id === 1}
				className='form__radio-input' 
				type='radio' 
				name='radio' 
			/>
		</label>
	)
}
