import React from 'react';
import image from '../John-Doe.jpg';
function Face() {
    return (
        <div>
        <section id="about-me">
  <h1>
    Hello, my name is
    <span className="rotate text-important">John doe</span>,<br />
    and i make horrible websites.
  </h1>
  <img className="avatar" src={image} alt="jhon-doe" />
</section>
</div>
    );
  }
  
  export default Face;