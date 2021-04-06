import React from 'react';
import image1 from '../proj1.jpg';
import image2 from '../proj2.jpg';
import image3 from '../proj3.jpg';
import image4 from '../proj4.jpg';
function Proj() {
    return (
        <div>
   <section id="projects">
  <h2 className="text-important">Projects</h2>
  <div className="projects-container">

    <div className="project-card">
      <img src={image1} alt="project" />
      <h3>Project 1</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Voluptatibus ex natus quis beatae perspiciatis repellat laudantium
        aliquam.
      </p>
      <p><a href="#">Github Link</a></p>
    </div>

    <div className="project-card">
      <img src={image2} alt="project" />
      <h3>Project 2</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Voluptatibus ex natus quis beatae perspiciatis repellat laudantium
        aliquam.
      </p>
      <p><a href="#">Github Link</a></p>
    </div>

    <div className="project-card">
      <img src={image3} alt="project" />
      <h3>Project 3</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Voluptatibus ex natus quis beatae perspiciatis repellat laudantium
        aliquam.
      </p>
      <p><a href="#">Github Link</a></p>
    </div>

    <div className="project-card">
      <img src={image4} alt="project" />
      <h3>Project 4</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Voluptatibus ex natus quis beatae perspiciatis repellat laudantium
        aliquam.
      </p>
      <p><a href="#">Github Link</a></p>
    </div>
  </div>
</section>
</div>
    );
  }
  export default Proj;
