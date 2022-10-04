import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux';
import { fetchUsers } from '../../store/users';
import { GetRequestBtnShowMore } from './getRequestBtnShowMore';
import { GetRequestUsersList } from './getRequestUsersList';
import Preloader from '../../components/preloader';

const GetRequest = () => {

  const dispatch = useDispatch()

  const { status } = useSelector(state => state.users)

  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch])

  return (
    <section id='users' className='get-request margin-bottom-140px'>
      <div className='container'>
        <h2 className='title get-request__title margin-bottom-50px'>Working with GET request</h2>
        {
          status === 'loading'
            ? <Preloader />
            : <GetRequestUsersList />
        }
        <GetRequestBtnShowMore />
      </div>
    </section>
  );
};

export default GetRequest;