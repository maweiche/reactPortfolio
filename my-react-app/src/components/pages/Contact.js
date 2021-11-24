import React from 'react';
import { useForm } from 'react-hook-form';

export default function Contact() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <div class="card" id="cardContainer">
            <div id="contact" class="card-body">
                <h2 class="card-title">Contact</h2>
                <p class="card-text">
                Email: mweiche@gmail.com <br/>
                Cell: (336)456-0003 <br/>
                <br/>    
                Feel Free to contact me through the channels above or just click the button below!
                </p>
                {/* <button id="msgBtn" type="button" class="btn btn-primary" data-toggle="modal" data-target="#contactModal">Send Matt a Message</button> */}
            </div>

    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="First name" {...register("First name", {required: true, maxLength: 80})} />
      <input type="text" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
      <textarea {...register("Message", {required: true, max: 300, min: 1})} />

      <input type="submit" class="btn btn-primary"/>
    </form>
    </div>
  );
}