import TestimonialBlock from "../Components/TestimonialBlock";

function Testimonials() {
    return (
        <div className="container-full section">
            <div className="container">
                <div className="row testimonial-row d-flex justify-content-center">
                    <div className="col-12 col-lg-4">
                        <TestimonialBlock
                            company={"George Smyth"}
                            stat={"240%"}
                            statText={"INCREASE IN WEBSITE TRAFFIC"}
                            quote={"Thanks to the agency's expertise, our website traffic increased by 280% within just three months of working together. Their strategic approach to SEO and content marketing made a difference!"}
                            link={"https://www.linkedin.com/feed/"}
                        />
                    </div>
                    <div className="col-12 col-lg-4">
                        <TestimonialBlock
                            company={"Leon Baxter"}
                            stat={"20K"}
                            statText={"NEW FOLLOWERS"}
                            quote={"The agency's social media campaigns helped us double our follower count in just six weeks, leading to an 80% increase in leads generated through social channels. Their creativity is unmatched!"}
                            link={"https://www.linkedin.com/feed/"}
                        />
                    </div>
                    <div className="col-12 col-lg-4">
                        <TestimonialBlock
                            company={"Ford Harrison"}
                            stat={"8X"}
                            statText={"BOOST IN CLICK RATES"}
                            quote={"After implementing their email marketing strategy, we saw a remarkable 4x increase in email open rates and a 25% boost in click-through rates. Their personalized approach made all the difference."}
                            link={"https://www.linkedin.com/feed/"}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Testimonials;
