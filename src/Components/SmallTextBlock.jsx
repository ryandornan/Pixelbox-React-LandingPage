function SmallTextBlock ({header, info}) {
    return ( 
            <div className="small-text-block">
                <div className="row">
                    <div className="col-10">
                <h4 className="section-header small-text-block-header">{header}</h4>
                <p small-text-block>{info}</p>

                    </div>
                </div>
            </div>   
    )
} 

export default SmallTextBlock