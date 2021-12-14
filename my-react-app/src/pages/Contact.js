import React from 'react';
import { useForm } from 'react-hook-form';

export default function Contact() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <div class="card" id="contactContainer" >
            <div id="contact" class="card-body">
                <h4 class="card-title">Contact</h4>
                <p class="card-text">
                <h6>Email: maweiche@gmail.com <br/>
                Cell: (336)456-0003</h6> <br/>
                <br/>    
                <h6>Feel Free to contact me through the channels above or through any of the social channels below!</h6>
                </p>
                <a href="https://www.linkedin.com/in/mattweichel/"  class="fa fa-linkedin"> </a>
                <a href="https://github.com/maweiche"  class="fa fa-github bg-dark"> </a>
                <a href="https://www.instagram.com/matt_weichel/" class="fa fa-instagram "> </a>
            </div>

    
    </div>
  );
}