import React from 'react';
import { Form } from '../../components/form';

const PostRequest = () => {
  return (
    <section id='signin' className='post-request'>
      <h2 className='title post-request__title margin-bottom-50px'>Working with POST request</h2>

      <div className='post-request__container'>
        <Form />
      </div>
    </section>
  );
};

export default PostRequest;