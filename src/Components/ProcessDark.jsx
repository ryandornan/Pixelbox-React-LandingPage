function ProcessDark ({number, header, info, image}) {
    return (
        <div className="container-full process-section-dark">
            <div className="container">
                <div className="row">
                    <div className="col-3">
                        <h2 className="section-header process-header-dark">{number}</h2>
                    </div>
                    <div className="col-6">
                        <h4 className="section-header">{header}</h4>
                        <p>{info}</p>
                    </div>
                    <div className="col-3">
                        <img src={image} alt="" className="full-width-image"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProcessDark