import React from 'react'

function Contact({setEmail,setName,setSubject,setMessage,submit}) {
  return (
    
  
<div className="container mb-4">



    <h2 class="h1-responsive font-weight-bold text-center my-4">Contact us</h2>
  
    <p class="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
        a matter of hours to help you.</p>

    <div class="row">

     <div className="col-md-2"></div>
        <div class="col-md-8 mb-md-0 mb-5">
            <form id="contact-form" name="contact-form" action="mail.php" method="POST">

                <div class="row">

                    
                    <div class="col-md-6">
                        <div class="md-form mb-0">
                        <label for="name" class="">Your name</label>
                            <input type="text" id="name" name="name" class="form-control"  onChange={(e)=>setName(e.target.value)}/>
                            
                        </div>
                    </div>
                   
                    <div class="col-md-6">
                        <div class="md-form mb-0">
                        <label for="email" class="">Your email</label>
                            <input type="text" id="email" name="email" class="form-control"  onChange={(e)=>setEmail(e.target.value)}/>
                            
                        </div>
                    </div>
                   

                </div>
               
                <div class="row">
                    <div class="col-md-12">
                        <div class="md-form mb-0">
                        <label for="subject" class="">Subject</label>
                            <input type="text" id="subject" name="subject" class="form-control"  onChange={(e)=>setSubject(e.target.value)}/>
                           
                        </div>
                    </div>
                </div>
               
                <div class="row">

                   
                    <div class="col-md-12">

                        <div class="md-form">
                        <label for="message">Your message</label>
                        <input type="text" id="subject" name="subject" class="form-control" onChange={(e)=>setMessage(e.target.value)}/>
                         
                
                        </div>

                    </div>
                </div>
               

            </form>

            <div class="text-center text-md-left  my-3">
                <a class="btn btn-primary" onClick={submit}>Send</a>
            </div>
            <div class="status"></div>
        </div>
        <div className='co-md-2'></div>
       
       
      
       </div>
       </div>

    

  )
}

export default Contact