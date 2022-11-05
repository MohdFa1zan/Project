import React, { Component } from 'react' 
import './Working.css' 

export default class Working extends Component { 
    render() { 
        return ( 
            <div className='working'>
            <h2>How it works ?</h2>
            <section className='section'>
               <article>
                  <div className='boxes'>
                     <h4>1. Create Account</h4>
                     <p>Create your account using phone number or email and take a free trial at ₹1.</p>
                  </div>
                  <div className='boxes'>
                     <h4>3. Select time slot</h4>
                     <p>Subscribe & select any time slot between 10 AM to 12 midnight.</p>
                  </div>
               </article>
               <article>
                  <div className='boxes' id="phone">
                    <img alt=''></img>
                  </div>
               </article>
               <article>
                  <div className='boxes'>
                     <h4>2. Subscribe</h4>
                     <p>Choose your preferred duration and select subscription package for your sessions. </p>
                  </div>
                  <div className='boxes'>
                     <h4>4. You are done</h4>
                     <p>That's it! Start practicing and reach your learning goal in speaking.</p>
                  </div>
               </article>
            </section>
         </div>
        ) 
    } 
}