import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import { FormRadio } from './formRadio'
import clsx from 'clsx'
import Popup from '../popup';
import { ReactComponent as SuccessSvg } from "../../assets/icons/success-image.svg";
import { FormInputPhone } from './formInputPhone'
import { FormUploadBtn } from './formUploadBtn'
import { addUsers } from '../../store/users'
import { setTogglePopup } from '../../store/popup'
import Preloader from '../preloader'


export const Form = () => {

  const dispatch = useDispatch()

  const { file, radio : {radio}, phone: {phone}, users: {error, status}, popup: {popup} } = useSelector(state => state)
  
  const { register, formState: {errors, isValid}, handleSubmit } = useForm({mode: 'onSubmit'})

  const onSubmit = async (data) => {
    let formData = new FormData()
    
    const dataKeyArr = ['position_id', 'name', 'email', 'phone', 'photo']
    const dataValueArr = [radio, data.name, data.email, phone, data.photo[0]]

    for(let i = 0; i < dataKeyArr.length; i++) formData.append(dataKeyArr[i], dataValueArr[i])

    dispatch(addUsers(formData))

    dispatch(setTogglePopup(true))
  }

  return (
    <form 
      // encType='multipart/form-data' 
      onSubmit={handleSubmit(onSubmit)} 
      action='submit' 
      className='form'
    >

      <div className='form__input-wrapper margin-bottom-50px'>
        <input 
          id='name' 
          name='name' 
          type='text' 
          className={clsx('form__input', errors?.name && 'form__input_error')} 
          required
          placeholder=' '
          {...register('name', {
            required: "The field is required!",
            minLength: {
              value: 2,
              message: "Minimum string length: 2!"
            },
            maxLength: {
              value: 60,
              message: "Maximum string length: 60!"
            }
            
          })}
        />
        <label className='form__label' htmlFor='name'>Your name</label>
        <small className='form__helper form__helper_error'>
          {errors?.name?.message || 'Example: John'}
        </small>
      </div>
      <div className='form__input-wrapper margin-bottom-50px'>
        <input 
          id='email' 
          name='email' 
          type='email'
          placeholder=' '
          className={clsx('form__input', errors?.email && 'form__input_error')}
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: 'Please enter a valid email',
            },
          })} 
          />
        <label className='form__label' htmlFor='email'>Email</label>
        <small className='form__helper form__helper_error'>
          {errors?.email?.message || 'Example: john@example.com'}
        </small>
      </div>
      
      <FormInputPhone register={register} />

      <FormRadio/>

      <FormUploadBtn register={register} />
      
      <div className='form__btn'>
        <button
          disabled={!isValid && !file}
          type='submit'
          className='btn btn-primary'
        >
          Sign up
        </button>
      </div>

      <Popup status={status} popup={popup} >
        {status === 'rejected_user' && <h2 className='title'>{error}</h2>}
        {status === 'loading_response' && <Preloader />}
        {status !== 'rejected_user' &&  status !== 'loading_response'
          && (
          <>
            <h2 className='title margin-bottom-50px'>User successfully registered</h2>
            <SuccessSvg />
          </>
        )}
      </Popup>
    </form>
  )
}
