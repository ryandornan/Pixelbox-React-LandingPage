function TextBlock ({section, header, info}) {
    return (
        <div className="row section second-section d-flex justify-content-center">    
            <div className="col-8 col-md-4 text-block">
                <h4 className="text-block-title">{section}</h4>
                <h2 className="section-header text-block-header">{header}</h2>
                <p>{info}</p>
            </div>   
        </div>
    )
} 

export default TextBlock