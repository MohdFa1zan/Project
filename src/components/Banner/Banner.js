import React from 'react'
import './Banner.css'

export default function Banner() {
  return (
    <section>
        <article className='block1'>
            <div className='box1'>
                <div className='text'>
                    <h2>50k+</h2>
                    <h4>Mobile Downloads</h4>
                </div>

                <div className='text'>
                    <h2>80k+</h2>
                    <h4>Happy Learners</h4>
                </div>

            </div>
            <div className='box2'>
                <div className='text'>
                    <h2>53K+</h2>
                    <h4>Sessions per month</h4>
                </div>

                <div className='text'>
                    <h2>200+</h2>
                    <h4>Speakers around</h4>
                </div>
            </div>
        </article>
        <article className='block2'>
            <h5>Book a trial</h5>
            <h2>Start your English <br/>speaking journey today!</h2>
            <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque pellentesque praesent vitae sit sagittis venenatis.</h4>
            <button className='trial'>Book a trial</button>
        </article>
    </section>
  )
}
