function Contact() {
    return (
        <div className="container-full section second-section contact" id="contact">
            <div className="container">
                <div className="row">
                    {/* Left Section */}
                    <div className="col-12 col-md-6">
                        <h2 className="section-header pb-3">
                            GET IN TOUCH 
                        </h2>
                        <button>
                            Schedule A Consultation
                        </button>
                        <div className="contact-items">
                            <div className="contact-item mt-3">
                                <p>E-Mail</p>
                                <h4>hello@pixelbox.com</h4>
                            </div>
                            <div className="contact-item mt-3">
                                <p>Phone</p>
                                <h4>+447581 182629</h4>
                            </div>
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="col-12 col-md-6">
                        <h2 className="section-header pb-3">CONNECT WITH US</h2>
                        <p className="pb-3">Fill in your details and let's kickstart the conversation!</p>
                        <div className="row contact-input">
                            <div className="col">
                                <input type="text" className="form-control" placeholder="First Name" aria-label="First Name" />
                            </div>
                            <div className="col">
                                <input type="text" className="form-control" placeholder="Last Name" aria-label="Last Name" />
                            </div>
                        </div>

                        <div className="row contact-input">
                            <div className="col">
                                <input type="text" className="form-control" placeholder="Email" aria-label="Email" />
                            </div>
                        </div>

                        <div className="row contact-input">
                            <div className="col">
                                <textarea className="form-control" placeholder="Message" aria-label="Message" rows="4"></textarea>
                            </div>
                        </div>

                        {/* Add Send Button */}
                        <div className="row contact-input">
                            <div className="col">
                                <button className="btn btn-primary w-100" type="submit">
                                    Send
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
