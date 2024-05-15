import ServicesInfo from "../Components/ServicesInfo"

function Services () {
    return (
        <div className="section container-full" id="services">
            <div className="container services d-flex justify-content-between align-content-center">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="col-12 col-md-6">
                            <h2 className="section-header">
                                EXPLORE OUR EXPERTISE 
                            </h2>
                            <p>
                            Discover how we unlock the full potential of your brand with 
                            our comprehensive suite of digital marketing solutions.
                            </p>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="services-info">
                            <ServicesInfo header={"MARKETING"} info={"Crafting compelling content to engage your audience. From blogs to videos, our marketing services create valuable, relevant material that attracts, informs, and converts leads."} />
                            <ServicesInfo header={"SEO OPTIMIZATION"} info={"Elevating website's visibility with our SEO services. We conduct researches, optimize site's structure, build quality backlinks, and track performance to drive conversions."} />
                            <ServicesInfo header={"PPC ADVERTISING"} info={"Maximizing ROI and target audience with our PPC services. We handle Google Ads, Bing Ads, and social media campaigns, optimizing targeting to drive qualified traffic."} />
                            <ServicesInfo header={"DESIGN & DEV"} info={"Crafting a standout website with our design & development. We create responsive, user-friendly sites that showcase your brand and drive conversions."} />
                            <ServicesInfo header={"ADS STRATEGY"} info={"Crafting custom digital ad strategy to meet your goals. We'll analyze trends, identify opportunities, and recommend effective channels to deliver results."} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services