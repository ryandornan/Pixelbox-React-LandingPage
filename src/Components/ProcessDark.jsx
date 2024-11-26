function ProcessDark ({number, header, info, image}) {
    return (
        <div className="container-full process-section-dark">
            <div className="container">
                <div className="row process-row">
                    <div className="col-3 col-md-3">
                        <h2 className="section-header process-header">{number}</h2>
                    </div>
                    <div className="col-9 col-lg-6">
                        <h4 className="section-header">{header}</h4>
                        <p>{info}</p>
                    </div>
                    <div className="col-12 col-lg-3 d-none d-lg-block">
                        <img src={image} alt="Process Step" className="process-image" />    
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProcessDark