// footer.js
import React from 'react';
import logo from '../../static/images/logo.png'

const footer = () => {
  return (  
  
  <footer className="footer" style={{height:"100%"}}>  
    <div  style={{marginTop:"80rem"}}>
 
<footer class="text-center text-lg-start bg-light text-muted">

  <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">

    <div class="me-5 d-none d-lg-block">
      <span>Get connected with me on social networks:</span>
    </div>
   
    <div >
    <a style={{margin:"2rem"}} href="https://github.com/Shalinisinha22" class="me-4 text-reset">
        <i class="fab fa-github"></i>
      </a>
      <a style={{margin:"2rem"}} href="https://www.linkedin.com/in/shalini-sinha-bbb943202/" class="me-4 text-reset">
        <i class="fab fa-linkedin"></i>
      </a>
     
     
      <a style={{margin:"2rem"}}href="https://www.instagram.com/_.shalini._sinha.___/" class="me-4 text-reset">
        <i class="fab fa-instagram"></i>
      </a>
     
     
    </div>
 
  </section>

  <section class="">
    <div class="container text-center text-md-start mt-5">

      <div class="row mt-3">
    
        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
        <img src={logo} style={{height:"13rem",width:"15rem",borderRadius:"5rem"}}></img>
          <h6 class="text-uppercase fw-bold mb-4">
           Resume builder
          </h6>
          <p>
           
          </p>
        </div>
       
        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
      
          <h6 class="text-uppercase fw-bold mb-4">
            Technologies
          </h6>
        
          <p>
            <a href="#" class="text-reset">React</a>
          </p>
          <p>
            <a href="#" class="text-reset">Redux</a>
          </p>
          <p>
            <a href="#" class="text-reset">Firebase</a>
          </p>
          <p>
            <a href="#" class="text-reset">Javascript</a>
          </p>
        </div>
       
       
        
        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
      
          <h6 class="text-uppercase fw-bold mb-4">Contact</h6>

          <p>
          
            <i class="fas fa-envelope me-3">
<<<<<<< HEAD
            </i><a style={{textDecoration:"none"}} href="mailto:shalinisinha.cspatna@gmail.com"> &nbsp;  shalinisinha.cspatna@gmail.com</a>
              
          
=======
            </i>
               &nbsp;  shalinisinha.cspatna@gmail.com
      
>>>>>>> 0dbdaa208207caf385a355ef843d8c756b31db58
          
            
          </p>
        
        </div>
       
      </div>
     
    </div>
  </section>
 
  <div class="text-center p-4" style={{backgroundColor:" rgba(0, 0, 0, 0.05)"}}>
    © 2023 Copyright. All Rights Reserved.

  </div>

</footer>

    </div>
  </footer>

  );
};
export default footer;
