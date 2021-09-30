import React from 'react';
import './profiles.css';
import george from './img/george.jpg';
import janet from './img/2-image.jpg';
import emma from './img/3-image.jpg';
import eve from './img/4-image.jpg';
import charles from './img/5-image.jpg';
import tracey from './img/6-image.jpg';
const profiles = () =>{
  return (
  <div className="row">
    <div className="user">
      <img src={george} alt="George" width="100%"/>
      <div className="text">
      <div className="name">
          George Bluth
      </div>
      <div className="email">
           george.bluth@reqres.in
      </div>
      </div>
    </div>

    <div className="user">
      <img src={janet} width="100%"/>
      <div className="text">
      <div className="name">
        Janet Weaver
      </div>
      <div className="email">
        janet.weaver@reqres.in
      </div>
      </div>
    </div>

    <div className="user">
      <img src={emma} width="100%"/>
      <div className="text">
      <div className="name">
        Emma Wong
      </div>
      <div className="email">
      emma.wong@reqres.in
      </div>
      </div>
    </div>

    <div className="user">
      <img src={eve} width="100%"/>
      <div className="text">
      <div className="name">
        Eve Holt
      </div>
      <div className="email">
      eve.holt@reqres.in
      </div>
      </div>
    </div>

    <div className="user">
      <img src={charles} alt="charles" width="100%" />
      <div className="text">
        <div className="name">
        Charles Morris
      </div>
      <div className="email">
      charles.morris@reqres.in
      </div>
      </div>
    </div>

    <div className="user">
      <img src={tracey} width="100%"/>
      <div className="text">
        <div className="name">
          Tracey Ramos
        </div>
        <div className="email">
          tracey.ramos@reqres.in
        </div>
      </div>
    </div>
  </div>
  );
}
export default profiles;

