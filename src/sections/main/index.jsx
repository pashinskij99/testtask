import React from 'react'
import Header from '../header'
import GetRequest from '../getRequest';
import PostRequest from '../postRequest';

export const Main = () => {
  return (
	  <div className='main'>
      <Header />
      <GetRequest />
      <PostRequest />
    </div>
  )
}
