import React from 'react';
import { Link, IndexLink } from 'react-router';


const HomePage=()=>(

<div>

        <header className="jumbotron hero-spacer">
            <h1>A Warm Welcome!</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, ipsam, eligendi, in quo sunt possimus non incidunt odit vero aliquid similique quaerat nam nobis illo aspernatur vitae fugiat numquam repellat.</p>
            <p><Link className="btn btn-primary btn-large">Call to action!</Link>
            </p>
        </header>
         <hr></hr>
          <div className="row">
            <div className="col-lg-12">
                <h3>Latest Features</h3>
            </div>
        </div>
</div>
);

export default HomePage;