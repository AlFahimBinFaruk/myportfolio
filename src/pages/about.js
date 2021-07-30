import React from 'react'
import { useState } from 'react';
import hero from '../img/hero.jpg'
export const About = () => {
  const [full, setFull] = useState(false)
  console.log(full)
  const MAX_LENGTH = 100;
  const  text  = 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.'
    return (
        <div className="aboutimg d-flex justify-content-center align-items-center">
            <div className="container d-flex justify-content-center">
                <div class="p-5 mb-4 bg-light rounded-3">
            <div class="row g-0  rounded overflow-hidden flex-md-row mb-4  h-md-250 position-relative aboutcont">
        <div class="col p-4 d-flex flex-column position-static ">
          <h3 class="mb-0">Hello I am <span className="signature">Al Fahim Bin Faruk</span></h3>
          <br></br>
          {full? <p class="card-text mb-auto desc">{text}</p>:<p class="card-text mb-auto desc">{`${text.substring(0, MAX_LENGTH)}...`}</p>
      }
          <a href="#" className="stretched-link" onClick={()=>setFull(!full)}>{full?"Read Less":"Read More"}</a>
        </div>
        <div class="col-auto d-none d-lg-block">
          <img src={hero} class="bd-placeholder-img aimg" width="200" height="250"/>
        </div>
      </div>
    </div> 
        </div>
        </div>
    )
}
