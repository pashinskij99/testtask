import React from 'react'
import clsx from 'clsx'
import { IMaskInput } from 'react-imask'
import { useDispatch } from 'react-redux'
import { setPhone } from '../../../store/phone'
import { useSelector } from 'react-redux'

export const FormInputPhone = ({register}) => {

	const dispatch = useDispatch()
	const { phone } = useSelector(state => state.phone)

	return (
		<div className='form__input-wrapper margin-bottom-50px'>
			<IMaskInput
				name='phone'
				className={clsx('form__input', phone && phone.length !== 13 && 'form__input_error')}
				mask='+{38} (000) 000-00-00'
				required
				placeholder=' '
				{...register('phone')}
				onAccept={(_, mask) => dispatch(setPhone('+' + mask._unmaskedValue))}
			/>
			<label className='form__label' htmlFor='phone'>Phone</label>
			<small className='form__helper form__helper_error'>
				{phone && phone.length !== 13 && 'Not a valid phone: +38 (XXX) XXX - XX - XX' || 'Example: +38 (XXX) XXX - XX - XX'}
			</small>
		</div>
	)
}
