function SmallTextBlock ({header, info}) {
    return ( 
            <div className="small-text-block">
                <h4 className="section-header small-text-block-header">{header}</h4>
                <p small-text-block>{info}</p>
            </div>   
    )
} 

export default SmallTextBlock