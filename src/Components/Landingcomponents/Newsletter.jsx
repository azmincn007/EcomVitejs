import React from 'react'
import img1 from '../Landingcomponents/img1.png'
import img2 from '../Landingcomponents/img2.png'
import './newsletter.css'
function Newsletter() {
  return (
    <div className='newsletter'>
    <div className="img1news"><img src={img1} alt="" /></div>
    <div className="contentsnews"><h4 className='newhead'>Subscribe to our Newsletter</h4>
    <p className='lrnew' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo molestias illum libero obcaecati qui, quos accusamus expedita esse repudiandae? Aliquam reiciendis vitae sit saepe nulla!</p>
    <input className='innew' type="email" placeholder='EREbusiness@gmail.com' />
    <div className="bs"><button className='subscribe'>Subscribe now</button></div></div>
    <div className="img2news"><img src={img2} alt="" /></div>
    </div>
  )
}

export default Newsletter
