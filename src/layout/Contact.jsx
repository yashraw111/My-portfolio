// import React from "react";
// // import   

// const Contact = () => {
//   return (
//     <>
//       <div className="contact container d-flex align-items-center justify-content-center text-center flex-column mt-4">
//         <h2 className="text-white mt-lg-5 mt-sm-0">
//           For any questions please drop a  mail
//         </h2>
//         <h1 className="gradient-text mt-lg-3 mt-sm-0">yashraw111@gmail.com</h1>
//         <p>or</p>
//         <h1 className="gradient-text mt-lg-3 mt-sm-0">+91 90165 92413</h1>
//       </div>
//       {/* <Footer></Footer> */}
//     </>
//   );
// };

// export default Contact;

// import React from "react";
// // import   

const Contact = () => {
  return (
    <>
      <div className="container contact ">
      <div class="top-boarder pt-4">
      
      </div>
    <h3 className="pink-text ">Contact with me</h3>
    
        <div className="d-flex ">
         

        <div class="container my-5">
  <div class="row justify-content-center row">
    <div class="col-lg-7">
      <form>
        <div class="row g-3 text-white">
          <div class="col-md-6">
            <label for="your-name" class="form-label">Your Name</label>
            <input type="text" class="form-control bg-transparent text-white" id="your-name" name="your-name" />
          </div>
          <div class="col-md-6">
            <label for="your-surname" class="form-label">Your Surname</label>
            <input type="text" class="form-control bg-transparent text-white" id="your-surname" name="your-surname" />
          </div>
          <div class="col-md-6">
            <label for="your-email" class="form-label">Your Email</label>
            <input type="email" class="form-control bg-transparent text-white" id="your-email" name="your-email" />
          </div>
          <div class="col-md-6">
            <label for="your-subject" class="form-label">Your Subject</label>
            <input type="text" class="form-control bg-transparent text-white" id="your-subject" name="your-subject"/>
          </div>
          <div class="col-12">
            <label for="your-message" class="form-label">Your Message</label>
            <textarea class="form-control bg-transparent text-white" id="your-message" name="your-message" rows="5" ></textarea>
          </div>
          <div class="col-12">
            <div class="row">
              <div class="col-md-6">
                <button data-res="<?php echo $sum; ?>" type="submit" class="btn btn-dark w-100 fw-bold contact-btn" >Send</button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</div>



        
        </div>

      </div>
    </>
  );
};

export default Contact;

