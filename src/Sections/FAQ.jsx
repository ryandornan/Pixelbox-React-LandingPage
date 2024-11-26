function FAQ () {
    return (
        <div className="container-full section third-section">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="col-12 col-md-6">
                            <h2 className="section-header">
                                WE HAVE ANSWERS 
                            </h2>
                            <p>
                            We've compiled a wealth of information to address common 
                            questions and provide clarity on our services and processes.
                            </p>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="accordion" id="accordion">
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    WHAT MAKES YOUR AGENCY DIFFERENT?
                                </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <p>
                                    Our agency stands out for our tailored approach, innovative strategies, and commitment to client success. We prioritize understanding your unique needs and goals to deliver customized solutions that drive tangible results.                                    
                                    </p>
                                </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    DO YOU OFFER CUSTOMIZABLE SERVICES?
                                </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <p>
                                    Yes, we offer both package deals and customizable services to accommodate varying needs and budgets. Whether you're looking for a comprehensive marketing package or specific services tailored to your requirements, we've got you covered.                                    
                                    </p>
                                </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    HOW DO YOU MEASURE THE SUCCESS?
                                </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <p>
                                    We measure the success of our campaigns through key performance indicators (KPIs) such as website traffic, conversion rates, engagement metrics, and ROI. We provide regular reports and analytics to track progress and optimize strategies accordingly.                                    
                                    </p>
                                </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                    HOW DO I GET STARTED WITH YOUR AGENCY?
                                </button>
                                </h2>
                                <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <p>
                                    Getting started is easy! Simply reach out to us through our contact form or give us a call. We'll schedule a consultation to discuss your goals, challenges, and how we can help. From there, we'll develop a customized plan tailored to your needs and hit the ground running.
                                    </p>
                                </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                    DO YOU OFFER CONSULTATIONS?
                                </button>
                                </h2>
                                <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <p>
                                    Our priority is your satisfaction. If you're not happy with the results of our services, we'll work closely with you to address any concerns and make necessary adjustments. Our goal is to ensure that you achieve the desired outcomes and are delighted with our work.                                    
                                    </p>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FAQ;
