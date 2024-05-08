function ServicesInfo ({header, info}) {
    return (
        <div className="row services-info">
            <div className="col-12">
                <h2 className="section-header services-header">{header}</h2>
                <p>{info}</p>
            </div>
        </div>
    )
}

export default ServicesInfo