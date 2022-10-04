import React from 'react'
import clsx from 'clsx'
import { useDispatch } from 'react-redux'
import { setFile } from '../../../store/uploadFile'
import { useSelector } from 'react-redux'

export const FormUploadBtn = ({ register, errors }) => {

	const dispatch = useDispatch()

	const handleUpload = (event) => dispatch(setFile(event.target.files[0].name))

	const { file } = useSelector(state => state.file)

	return (
		<div
			className={clsx('upload margin-bottom-50px', errors?.photo && 'upload_error')}
		>
			<label className={clsx('btn upload__btn', errors?.photo && 'upload__btn_error')} htmlFor='photo'>Upload</label>
			<input 
				{...register('photo', {
					validate: {
						lessThan10MB: files => files[0]?.size < 5000000 || 'Max file size 5mb',
						acceptedFormats: files =>
							['image/jpeg', 'image/jpg'].includes(
								files[0]?.type
							) || 'Only JPG, JPEG',
					},
				})}
				onChange={handleUpload}
				id='photo' 
				type='file' 
				name='photo' 
				className='btn upload__hidden-btn' 
			/>
			<input className='upload__input' defaultValue={file} placeholder='Upload your photo' />
			<small className='form__helper form__helper_error'>
				{errors?.photo?.message || 'Photo should be jpg/jpeg image, with resolution at least 70x70px and size must not exceed 5MB.'}
			</small>
		</div>
	)
}
