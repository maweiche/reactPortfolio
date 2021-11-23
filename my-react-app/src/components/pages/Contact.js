import React from 'react';

// const styles = {
//     card: {
//         margin: 5,
//         background: 'black',
//         display: 'flex',
//         justifyContent: 'center',
//         color: 'white'

//     }
// };

export default function Contact() {
    return (
        <article class="row">
        <div class="card" id="cardContainer">
            <div id="contact" class="card-body">
                <h2 class="card-title">Contact</h2>
                <p class="card-text">
                Email: mweiche@gmail.com <br/>
                Cell: (336)456-0003 <br/>
                <br/>    
                Feel Free to contact me through the channels above or just click the button below!
                </p>
                <button id="msgBtn" type="button" class="btn btn-primary" data-toggle="modal" data-target="#contactModal">Send Matt a Message</button>
            </div>
        </div>
        {/* <!-- Modal Components --> */}
        <div class="modal" id="contactModal" tabindex="-1" role="dialog" aria-labelledby="contactModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                     <h5 class="modal-title" id="contactModalLabel">New message</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                           <span aria-hidden="true">&times;</span>
                     </button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="form-group">
                            <label for="subject" class="col-form-label">Subject:</label>
                            <input type="text" class="form-control" id="subject" />
                            </div>
                            <div class="form-group">
                                <label for="message-text" class="col-form-label">Message:</label>
                                <textarea class="form-control" id="message-text"></textarea>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Send Message</button>
                </div>
            </div>
        </div>
        
    </article>
    );
}

