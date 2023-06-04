import React from 'react'

function Contact() {
  return (
    <div>
      {/* banner */}
      <div className="blue_bg">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="titlepage">
                <h2>Contact Us</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* contact section */}
      <div id="contact" className="contact">
        <div className="con_bg">
          <div className="container">
            <div className="row">
              <div className="col-md-10 offset-md-1">
                <form id="request" className="main_form">
                  <div className="row">
                    <div className="col-md-6 col-sm-6">
                      <input className="contactus" placeholder="Name" type="type" name="Name" />
                    </div>
                    <div className="col-md-6 col-sm-6">
                      <input className="contactus" placeholder="Phone Number" type="type" name="Phone Number" />
                    </div>
                    <div className="col-md-6 col-sm-6">
                      <input className="contactus" placeholder="Email" type="type" name="Email" />
                    </div>
                    <div className="col-md-6 col-sm-6">
                      <input className="contactus" placeholder="Address" type="type" name="Address" />
                    </div>
                    <div className="col-md-12">
                      <input className="contactusmess" placeholder="Message" type="type" message="Name" />
                    </div>
                    <div className="col-md-12 mb-3">
                      <button className="send_btn">Send</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end contact section */}
    </div>

  )
}

export default Contact
