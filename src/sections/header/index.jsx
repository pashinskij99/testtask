import React from 'react'

const Header = () => {
  return (
    <section className='header container margin-bottom-140px'>
      <div className='header__wrapper'>
        <h1 className='title header__title margin-bottom-20px'>Test assignment for front-end developer</h1>
        <p className='header__paragraph margin-bottom-30px'>
          What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast understanding of User design thinking as they'll be building web interfaces with accessibility in mind. They should also be excited to learn, as the world of Front-End Development keeps evolving.
        </p>
        <a href='#signin' className='btn btn-primary'>Sign up</a>
      </div>
    </section>
  )
}

export default Header
