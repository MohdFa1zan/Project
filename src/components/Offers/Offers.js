import React from 'react'
import './Offers.css'

export default function Offers() {
  return (
    <div className='offers'>
    <h2>What we offer ?</h2>
    <section>
        <article className='offer1'>
            <div className='overlay'>
                <h4>Customised Curriculum</h4>
                <p>Customised sessions and module for Basic, Intermediate and Advanced learners.</p>
            </div>
        </article>
        <article className='offer2'>
            <div className='overlay'>
                <h4>Experimental Learning </h4>
                <p>Do not study English, rather consume and use it.</p>
            </div>
        </article>
        <article className='offer3'>
            <div className='overlay'>
                <h4>Shadowing Method</h4>
                <p>Think and speak in English rather than translating it from mother tongue.</p>
            </div>
        </article>
    </section>
    </div>
  )
}
