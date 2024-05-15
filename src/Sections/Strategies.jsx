import SmallTextBlock from "../Components/SmallTextBlock"

function Strategies () {
    return (
        <div className="container-full section" id="strategy">
            <div className="container">
                <div className="row d-flex justify-content-center pb-4">
                    <div className="col-12 col-lg-4">
                        <SmallTextBlock
                        header={"AUDIENCE SEGMENTATION"}
                        info={"Segmenting audience based on demographics, interests, or behaviors to deliver personalized marketing messages."}
                        />
                    </div>
                    <div className="col-12 col-lg-4">
                        <SmallTextBlock
                        header={"COMPETITIVE ANALYSIS"}
                        info={"Analyzing competitors' strategies, strengths, and weaknesses to identify opportunities for differentiation and gain edge in the market."}
                        />
                    </div>
                    <div className="col-12 col-lg-4">
                        <SmallTextBlock
                        header={"BRAND POSITIONING"}
                        info={"Defining brand's unique value proposition and differentiation in the market to attract target audience."}
                        />
                    </div>
                </div>
                
                <div className="row d-flex justify-content-center">
                    <div className="col-12 col-lg-4">            
                        <SmallTextBlock
                        header={"CONTENT PLANNING"}
                        info={"Developing a plan for creating and publishing content across different and platforms, ensuring consistency."}
                        />
                    </div>
                    <div className="col-12 col-lg-4">                       
                        <SmallTextBlock
                        header={"LIFECYCLE MARKETING"}
                        info={"Developing targeted marketing campaigns tailored to different stages of the customer lifecycle to drive repeat business."}
                        />
                    </div>
                    <div className="col-12 col-lg-4">                        
                        <SmallTextBlock
                        header={"COLLABORATION INITIATIVES"}
                        info={"Partnering with brands or influencers to expand reach and create beneficial marketing campaigns or promotions."}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Strategies