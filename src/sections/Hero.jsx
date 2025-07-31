import React from 'react'

const Hero = () => {
  return (
    <section className='bg-main-bg'>
        <div className='hero-conatiner'>
            <img src="/images/hero-img.png" alt="hero-img" className='absolute bottom-0 left-1/2 -translate-x-1/2 object-auto
            scale-100 md:scale-150' />
        </div>
    </section>
  )
}

export default Hero